import {useState,useEffect} from "react";
import resolvePromise from "../resolvePromise";
import {getChallengerPlayers} from "../services/ApiCalls";

const ChallengerOverview = (props) => {
    const [,reRender] = useState();
    const [promiseState,] = useState(props.model.searchResultsPromiseState);
    const reRenderACB = () => reRender(new Object);
    

    useEffect(() => {if (!props.model.searchResultsPromiseState.promise) {
        makeSearchACB();
      }}, []);
    

    const updateOnPromise = (promise,reRender) => {
        if(!promise) return;
        promise.then(reRender).catch(reRender)
    }  
    const makeSearchACB = () => {
        props.model.doSearch()
        updateOnPromise(props.model.searchResultsPromiseState.promise,reRenderACB);
    }

    promiseState.data ? console.log(promiseState.data.entries[0],"THIS IS WHAT WE WANT"):console.log("FUCK");

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th>Summoner Name</th>
                        <th>League Points</th>
                    </tr>
                </thead>
                <tbody>
                    {promiseState.data ? promiseState.data.entries.map((player, index) => (
                        <tr key={index}>
                            <td>{player.summonerName}</td>
                            <td>{player.leaguePoints}</td>
                        </tr>
                    )) : <tr><td colSpan={2}>No data yet</td></tr>}
                </tbody>
            </table>
        </div>
        );
    }

export default ChallengerOverview;