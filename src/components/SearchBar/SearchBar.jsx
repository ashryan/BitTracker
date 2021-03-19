import React from 'react'

const SearchBar = (props) => {

   const {getCoin, getSearchText} = props;

   const handleBlur = () =>  {
       getCoin()
    //    getSearchText()
   }
   

    return (
        <div>
            <input placeholder="Enter crypto here"  onBlur={getCoin}></input>

            <h1></h1>
        </div>
    )
}

export default SearchBar
// onChange={getSearchText}