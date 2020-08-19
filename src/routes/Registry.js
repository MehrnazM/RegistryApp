import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry(){
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)
    const addItem = (e) => {
        e.preventDefault();
        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        
    }
    useEffect(() => {
        if(textInput.length > 10) setError(true);
        else setError(false);
    }, [textInput])
    console.log(registryData)
    return(
        <dive>
            <h1>Registry</h1>
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>text input: 
                    <input type="text" value={textInput} onChange ={(e) => setTextInput(e.target.value)}/>
                </label>
                <br/><input type="submit" value="Submit" />
            </form>
            {error ? <span style={{color: "red"}}>Error occured.</span> : null}
        </dive>
    )
}

export default Registry;