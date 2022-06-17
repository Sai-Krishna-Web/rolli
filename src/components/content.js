import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Movies from "../pages/movies";
import Shows from "../pages/shows";
import Casts from "../pages/casts";
import Home from "../pages/home";


function Content(props){
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows"  exact element={<Shows />} />
            <Route path="/movies"  element={<Movies />} />
            <Route path="/casts"  element={<Casts />} />
        </Routes>
        
    );

}

export default Content;