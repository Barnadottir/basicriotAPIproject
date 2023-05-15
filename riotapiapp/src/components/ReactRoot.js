import RiotModel from "../RiotModel";
import ChallengerOverview from "./ChallengerOverview"
import Searchbar from "./Searchbar"
const myModel = new RiotModel();

const ReactRoot = () => {
    /*<ChallengerOverview model = {myModel}/>*/
    return (
    <Searchbar model = {myModel}/>
    )
}

export default ReactRoot;