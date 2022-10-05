import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
    return (
        <Router>
        <Routes>
            <Route exact path="/" element={<Home page="1" />} />
            <Route exact path="/about" element={<About page="3" />} />
        </Routes>
        </Router>
    );
}

export default App;
