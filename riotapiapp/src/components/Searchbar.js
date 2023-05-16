import {useState,useEffect} from "react";
import "./Navbar.css"
import SearchbarView from "../views/SearchbarView";
import CurrentGameView from "../views/CurrentGameView";
const Searchbar = (props) => {
    const [summonerID,setSummonerID] = useState();
    const [promiseStateMatchData,] = useState(props.model.promiseStateMatchData);
    const [searchParams,setSearchParams] = useState();
    const [promiseState,] = useState(props.model.summonerSearchResult);
    const [currentGamePromise,] = useState({});
    const [liveGamePromiseState,] = useState(props.model.liveMatchSearchResults);

    const setSearchParamsABC = (value) => setSearchParams(value)

    //here therse should be the ID search

    useEffect(() => {
        if (summonerID) {
            props.model.currentSummonerID = summonerID
            props.model.doSearchMatchData(props.model.currentSummonerID)
            console.log("searching... for match data...");
        }
    },[summonerID])
    

    useEffect(() => {
        if (searchParams) {
            props.model.summonerSearchParams = searchParams
            props.model.doSummonerSearch(searchParams)
            console.log("searching....");
        }
    },[searchParams])

    useEffect(() => {
        console.log("check SummonerID",summonerID);
        //if(summonerID === props.model.currentSummonerID) return;
        console.log("summonerID",summonerID);
        props.model.currentSummonerID = summonerID;
        props.model.doActiveGameSearch();
        console.log("searching for current game info!");
    },[summonerID])

    //promiseState.data ? console.log("THIS IS THE DATA",promiseState.data) : console.log("no Promse yet");
    
    return (
        <div>
            <SearchbarView 
            setParams = {setSearchParamsABC}
            searchParams = {searchParams}
            promiseState = {promiseState}
            summonerID = {summonerID}
            setSummonerID= {setSummonerID}
            />
            {   
                liveGamePromiseState.data ? 
                <CurrentGameView data = {liveGamePromiseState.data} />
                : null
            }
        </div>  
    );
}

export default Searchbar;