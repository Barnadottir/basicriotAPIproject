const SearchbarView = (props) => {


    const handleSubmit = event => {
        event.preventDefault()
        props.setParams(event.target.value)
    }

    const handleClick = () => {
        if(!props.promiseState.data) {
            console.log("ERROR HERE!")
            return;
        }
        console.log("works here!!");
        props.setSummonerID(props.promiseState.data.id)
    }



    return (
        <div className="searchbar">
            <form className="search-form" onSubmit={(event) => {handleSubmit(event)}}>
                <input className="search-input" type="text" value={props.searchParams} onChange={e => handleSubmit(e)} />
                <input className="search-submit" type="submit" value="Submit" />
            </form>
            {
            props.promiseState.data ?
                <table className="search-results">
                    <tr>
                        <td onClick = {() => handleClick()}>
                            Summoner name: {props.promiseState.data.name}
                            Summoner level: {props.promiseState.data.summonerLevel}
                        </td>
                    </tr>
                </table>
                : "no active game..."
            }
        </div>
    );
}

export default SearchbarView;