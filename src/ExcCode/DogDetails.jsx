import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


function DogDetails(dogs) {
    if (!dogs) return <Navigate to="/dogs" />

    return (
        <div className="DogDetails">
            <img src={`/${dogs.src}.jpg`} alt="dog.name" />
            <p>Name: {dogs.name} Age: {dogs.age}</p>

        </div>
    )
}

export default DogDetails;