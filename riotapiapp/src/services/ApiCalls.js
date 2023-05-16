import { BASE_URL,API_KEY } from "../apiConfig";

const queueTypes = [
    "RANKED_SOLO_5x5",
    "RANKED_FLEX_SR",
    "RANKED_FLEX_TT",
]


const treatHTTPResponse = (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        //console.log("LOOK AT WHAT WE RETURN: ",response);
        return response.json();
}

const getChallengerPlayers = () => {
    return fetch(BASE_URL + "/lol/league/v4/challengerleagues/by-queue/"+queueTypes[0]+"?api_key=" + API_KEY)
    .then(treatHTTPResponse)
    .catch(error => {
        console.error(error);
    });
}

const getSummonerByName = (name) => {
    const encodedName = encodeURIComponent(name);
    return fetch(BASE_URL + "/lol/summoner/v4/summoners/by-name/"+encodedName+"?api_key=" + API_KEY)
    .then(treatHTTPResponse)
    .catch(error => console.log(error))
}

const getMatchData = (id) => {
    ///ids
    return fetch(BASE_URL + "/lol/match/v5/matches/by-puuid/" +id+"?api_key=" + API_KEY)
    .then(treatHTTPResponse)
    .catch(error => console.log(error))
}

const getActiveGameBySummonerId = (encryptedSummonerId) => {
    return fetch(BASE_URL + "/lol/spectator/v4/active-games/by-summoner/" + encryptedSummonerId + "?api_key=" + API_KEY)
    .then(treatHTTPResponse)
    .catch(error => console.log(error))
}

export {getChallengerPlayers,getSummonerByName,getMatchData,getActiveGameBySummonerId}


