import {useState,useEffect} from "react";
const Searchbar = (props) => {

    const [searchParams,setSearchParams] = useState();
    const [promiseState,] = useState(props.model.summonerSearchResult);

    const handleSubmit = event => {
        event.preventDefault()
        setSearchParams(event.target.value)
    }

    //here therse should be the ID search
    

    useEffect(() => {
        if (searchParams) {
            props.model.summonerSearchParams = searchParams
            props.model.doSummonerSearch(searchParams)
            console.log("searching....");
        }
    },[searchParams])

    promiseState.data ? console.log("THIS IS THE DATA",promiseState.data) : console.log("no Promse yet");
    
    return (
        <div>
            <form onSubmit = {(event) => {handleSubmit(event)}}>
                <input type="text" value={searchParams} onChange={e => setSearchParams(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            {
                    promiseState.data ? 
                    <table>
                        <tr>
                            {promiseState.data.name /*Additional requests have to me made here! */}
                            {/*Adda new component here!*/}
                        </tr>
                    </table>
                    : null
                }
        </div>
    );

}

export default Searchbar;