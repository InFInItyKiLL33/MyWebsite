import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import './App.sass';
import Home from "./components/home/home";
import Timeline from "./components/timeline/timeline";
import About from "./components/about/about";
import ContactMe from "./components/contact/contact";
import axios from 'axios';

function App() {

    const BACKENDURL = "https://infinitytwoproxy.onrender.com/";
    const types = {0: "Programming", 1: "Aviation", 2: "PC Building", 3: "Design"};
    const ERR_RETRIES = 10;
    const [searchParams, setSearchParams]:any = useSearchParams(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const [allowedContentTypes, setAllowedContentTypes] = useState([-2, -2, -2, -2]); // -3 backend error, -2 for loading, -1 for access all, 0 for no access (all 0 for invalid uuid), 1 and above for certain access
    const [retrievedContent, setRetrievedContent] = useState([]);

    function removeParam(key: string, sourceURL: string): string {
        var rtn = sourceURL.split("?")[0],
            param,
            params_arr = [],
            queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
        if (queryString !== "") {
            params_arr = queryString.split("&");
            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                param = params_arr[i].split("=")[0];
                if (param === key) {
                    params_arr.splice(i, 1);
                }
            }
            if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
        }
        return rtn;
    }

    function getCookie(cookieName: string): string {
        let cookie: any = {};
        document.cookie.split(';').forEach(function(el) {
            let [key,value] = el.split('=');
            cookie[key.trim()] = value;
        })
        // console.log("uuid: " + cookie[cookieName]);
        return cookie[cookieName];
    }

    async function getAccess(uuid:string = "", retries = 0): Promise<void> {

        if (retries > ERR_RETRIES) {
            setAllowedContentTypes([-3, -3, -3, -3]);
            return;
        };

        await axios({
            method: 'GET', 
            url: BACKENDURL + "?uuid=" + uuid,
        })
        .then((response) => {
            console.log(response, uuid);
            if (response.status === 200 && response.data["result"] === "ok") {
                // console.log(response.data);
                setAllowedContentTypes(response.data["allowedCategories"]);
                for (let i = 0; i < Object.keys(types).length; i++) {
                    setRetrievedContent((prevRetrievedContent: any): any => {
                        return [...prevRetrievedContent, response.data["content" + String(i + 1)]];
                    });
                };
            } else if (response.data["result"] === "error" || response.data["result"] === "excessive") {
                setAllowedContentTypes([-3, -3, -3, -3]);
            } else if (response.data["result"] === "invalid") {
                setAllowedContentTypes([0, 0, 0, 0]);
            } else {
                setTimeout(function() {
                    return getAccess(getCookie("uuid"), retries + 1);
                }, 1000);
            };
            return;
        })
        .catch((error) => {
            // console.log(`Error: ${error.data}`)
            return getAccess(getCookie("uuid"), retries + 1);
        });

    };

    useEffect(():void => {

        //uuidParamToCookie
        let uuid = searchParams.get("uuid");
        if (uuid !== "" && uuid !== null) {
            var now = new Date();
            now.setTime(now.getTime() + 86400*30); // 30 days expiry cookie
            document.cookie = "uuid=" + uuid + ";expires=" + now.toUTCString();
            window.location.replace(removeParam("uuid", window.location.href)); 
        } else {
            uuid = getCookie("uuid");
        };

        getAccess(uuid);

    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    // getAccess requires to be reused as child props

    return (
        <>
            <Routes>
                <Route path="/" element={<Home page="1" backendURL={BACKENDURL} allowedContentTypes={allowedContentTypes} setAllowedContentTypes={setAllowedContentTypes} types={types} getCookie={getCookie} />} />
                <Route path="/timeline" element={<Timeline page="2" backendURL={BACKENDURL} getCookie={getCookie} allowedContentTypes={allowedContentTypes} setAllowedContentTypes={setAllowedContentTypes} retrievedContent={retrievedContent} getAccess={getAccess} types={types} />} />
                <Route path="/about" element={<About page="3" backendURL={BACKENDURL} />} />
                <Route path="/contact" element={<ContactMe page="4" backendURL={BACKENDURL} />} />
            </Routes>
        </>
    );
}

export default App;
