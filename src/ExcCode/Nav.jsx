import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav className="Nav">
            <ul>
                <li><Link to={"/DogsList"}>Home</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;