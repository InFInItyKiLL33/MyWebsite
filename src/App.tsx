import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
import Home from "./components/home/home";
import Timeline from "./components/timeline/timeline";
import About from "./components/about/about";
import ContactMe from "./components/contact/contact";

function App() {
    return (
        <>
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
