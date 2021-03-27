
import SearchBar from '../SearchBar'
import React, { useState, useEffect} from "react"
import CryptoCard from '../CryptoCard'
import Button from '@material-ui/core/Button'
import { Card, Container } from '@material-ui/core/'
import coinSelection from "../../data/coin-selection.json"
import { Link } from 'react-router-dom';
import styles from "./CardDisplay.module.scss"

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
      <Container>
        <div>
          <SearchBar  getCoin = {getCoin} getSearchText={getSearchText} />
            
          <Link to="/portfolio" style={{textDecoration: 'none'}}>
            <Button variant="outlined" color="primary">Go to portfolio</Button>
            </Link>
          </div>    
           
            {coins && searchText.length > 0 && coins.filter(coin => coin.id === searchText).map(filteredCoins => 
            
            
            (
               <span className={styles.cryptoCard}><CryptoCard coin={filteredCoins} getSearchText={getSearchText} addCrypto={addCryptoToPort} /></span> 
            )
            )}
         

         
           
            {coins && searchText.length === 0 && coins.map((coin) => {
                return ( 
                  <span className={styles.cryptoCard}><CryptoCard coin={coin}   /></span>
                
                )
            })}
            
            
         
            </Container>
    )
}

export default CardDisplay
