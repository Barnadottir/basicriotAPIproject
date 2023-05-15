import { getChallengerPlayers,getSummonerByName } from "./services/ApiCalls";
import resolvePromise from "./resolvePromise";
class RiotModel {

    constructor() {
        this.searchResultsPromiseState = {};
        this.summonerSearchResult = {};
        this.summonerSearchParams = null;
    }

    doSearch() {
        resolvePromise(getChallengerPlayers(),this.searchResultsPromiseState)
    }

    doSummonerSearch() {
        resolvePromise(getSummonerByName(this.summonerSearchParams),this.summonerSearchResult)
    }
}

export default RiotModel;