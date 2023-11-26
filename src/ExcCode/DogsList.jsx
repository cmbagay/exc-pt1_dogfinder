import React from "react";
import { Routes, Route } from "react-router-dom";

import Dogs from "./Dogs";
import Whiskey from "./Whiskey";
import Duke from "./Duke";
import Perry from "./Perry";

function DogsList() {
    return (
        <Routes>
            <Route path="/Dogs" element={<Dogs />} />
            <Route path="/Whiskey" element={<Whiskey />} />
            <Route path="/Duke" element={<Duke />} />
            <Route path="/Perry" element={<Perry />} />
        </Routes>
    );
}

export default DogsList;