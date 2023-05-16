import { getChallengerPlayers,getSummonerByName,getMatchData} from "./services/ApiCalls";
import resolvePromise from "./resolvePromise";
class RiotModel {

    constructor() {
        this.searchResultsPromiseState = {};
        this.summonerSearchResult = {};
        this.summonerSearchParams = null;
        this.currentSummonerID = null;
        this.currentPlayerID = null;
        this.matchSearchResults = {};
        this.liveMatchSearchResults = {};
    }

    doSearch() {
        resolvePromise(getChallengerPlayers(),this.searchResultsPromiseState)
    }

    doSummonerSearch() {
        resolvePromise(getSummonerByName(this.summonerSearchParams),this.summonerSearchResult)
    }

    doSearchMatchData() {//Currently does not work! Have to doublecheck! 
        resolvePromise(getMatchData(this.currentPlayerID),this.matchSearchResults)
    }

    doActiveGameSearch() {
        resolvePromise(getMatchData(this.currentSummonerID),this.liveMatchSearchResults)
    }
}

export default RiotModel;