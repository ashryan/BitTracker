
import SearchBar from '../SearchBar'
import React, { useState, useEffect} from "react"
import CryptoCard from '../CryptoCard'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import coinSelection from "../../data/coin-selection.json"


const CardDisplay = () => {

    const [coins, setCoins] = useState(null)
  

   const [searchText, setSearchText] = useState('')
 

 
    const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=${searchText}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    
 
   

    useEffect(() => {
      fetch(baseUrl).then(res => {
        return res.json()
       }).then(data => {
         setCoins(data)
         return coins
       })

    },[])


   const addCryptoToPort = (event) => {

     coinSelection.push(event.target.value)
     console.log(coinSelection)

   }


  

    const getCoin = () => { 
      fetch(baseUrl).then(res => {
       return res.json()
      }).then(data => {
        setCoins(data)
        return coins
      })
    }

    
    const getSearchText = (event) => {
      setSearchText(event.target.value)
      console.log(searchText)
    }

    return (
        <div>
                <SearchBar  getCoin = {getCoin} getSearchText={getSearchText} addCrypto = {addCryptoToPort} />
        
        {coins && searchText.length > 0 && coins.filter(coin => coin.id === searchText).map(filteredCoins => 
        
        
        (
            <CryptoCard coin={filteredCoins} getSearchText={getSearchText} addCrypto={addCryptoToPort} />
        )
        )}
    
        {coins && searchText.length === 0 && coins.map((coin) => {
            return (
            <CryptoCard coin={coin}  />
            )
        })}
        </div>
    )
}

export default CardDisplay
