import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <dive>
            <h1 className="headers">Home</h1>
            <Link to="/registry">Click here to go to registry</Link>
        </dive>
    )
}

export default Home;