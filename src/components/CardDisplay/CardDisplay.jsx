
import SearchBar from '../SearchBar'
import React, { useState, useEffect} from "react"
import CryptoCard from '../CryptoCard'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import coinSelection from "../../data/coin-selection.json"
import { Link } from 'react-router-dom';


const CardDisplay = () => {

    const [coins, setCoins] = useState(null)
  

   const [searchText, setSearchText] = useState('')
 

 
    const baseUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=&order=market_cap_desc&per_page=100&page=1&sparkline=false"
 
   

    useEffect(() => {
      fetch(baseUrl).then(res => {
        return res.json()
       }).then(data => {
         setCoins(data)
         return coins
       })

    },[])


   const addCryptoToPort = (event) => {

    const selectedCoin = event.target.value
    const selectedCoinID = selectedCoin.id
    coinSelection.push(selectedCoinID)
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
                <SearchBar  getCoin = {getCoin} getSearchText={getSearchText} />
        
        {coins && searchText.length > 0 && coins.filter(coin => coin.id === searchText).map(filteredCoins => 
        
        
        (
            <CryptoCard coin={filteredCoins} getSearchText={getSearchText} addCrypto={addCryptoToPort} />
        )
        )}
    
        {coins && searchText.length === 0 && coins.map((coin) => {
            return (
            <CryptoCard coin={coin}   />
            )
        })}

        <Link to="/portfolio">
        <button></button>
        </Link>
        </div>
    )
}

export default CardDisplay
