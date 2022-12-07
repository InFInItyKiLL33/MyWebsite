import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/keyframes.css';
import Home from "./components/home/home";
import Timeline from "./components/timeline/timeline";
import About from "./components/about/about";
import "./components/material_icons.css"

function App() {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>
            <Router>
            <Routes>
                <Route exact path="/" element={<Home page="1" />} />
                <Route exact path="/timeline" element={<Timeline page="2" />} />
                <Route exact path="/about" element={<About page="3" />} />
            </Routes>
            </Router>
        </>
    );
}

export default App;
