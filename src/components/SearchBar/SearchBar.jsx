import React from 'react'

const SearchBar = (props) => {

   
    

    return (
        <div>
            <input placeholder="Enter crypto here" onChange={props.getInput}></input>
        </div>
    )
}

export default SearchBar
