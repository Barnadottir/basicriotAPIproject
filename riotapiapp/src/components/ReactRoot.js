import RiotModel from "../RiotModel";
import ChallengerOverview from "./ChallengerOverview"
import Navbar from "./Navbar";
import Searchbar from "./Searchbar"
import "./Navbar.css"
import {useState,useEffect} from "react";
const myModel = new RiotModel();

const ReactRoot = () => {
    const [state,setState] = useState(false);
    return (
    <div class = "container">
        
        { state ? (
        <>
            <Searchbar model = {myModel}/>
            /*<ChallengerOverview model = {myModel}/>*/
            <Navbar/> 
        </>): (
        <>
            <h1>Simple League of Legends application</h1>
            <button onClick = {() => setState(true)}>Press me to advance!</button>
        </>
        )
        }
    </div>
    )
}

export default ReactRoot;