import { render } from "react-dom";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Room from './Room';
import './App.css';

export default function App() {
    const rootElement = document.getElementById("root");
    render (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/room" element={<Room />} />
            </Routes>
        </BrowserRouter>,
        rootElement
    );
}
