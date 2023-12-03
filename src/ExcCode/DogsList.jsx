import React from "react";
import { Link } from "react-router-dom";

function DogsList({ dogs }) {
    console.log(dogs);
    return (
        <div className="Dog-List">
            <h1>Doggos</h1>
            <div className="Indiv-Dog">
                {dogs.map(dog => (
                    <div key={dog.name}>

                        <img src={`/${dog.src}.jpg`} alt="dog.name" />
                        <Link to={`dogs/${dog.name}`}>{dog.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogsList;