import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/keyframes.css';
import Home from "./components/home/home";
import Timeline from "./components/timeline/timeline";
import About from "./components/about/about";
import ContactMe from "./components/contact/contact";
import "./components/material_icons.css"

function App() {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap" rel="stylesheet"></link>
            </head>
            <Router>
                <Routes>
                    <Route path="/" element={<Home page="1" />} />
                    <Route path="/timeline" element={<Timeline page="2" />} />
                    <Route path="/about" element={<About page="3" />} />
                    <Route path="/contact" element={<ContactMe page="4" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
