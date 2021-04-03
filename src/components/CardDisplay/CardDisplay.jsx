
import SearchBar from '../SearchBar'
import React, { useState, useEffect} from "react"
import CryptoCard from '../CryptoCard'
import Button from '@material-ui/core/Button'
import { Card, Container, Typography,  TextField, Grid, Snackbar } from '@material-ui/core'
import  Alert  from "@material-ui/lab/Alert"
import coinSelection from "../../data/coin-selection.json"
import { Link } from 'react-router-dom';
import styles from "./CardDisplay.module.scss"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { db, auth } from "../../firebase"
import Drawer from "../Drawer"
import Loading from "../Loading"


const CardDisplay = () => {

  var stagedCoins = []

 
 

    const [coins, setCoins] = useState(null)
  

   const [searchText, setSearchText] = useState('')
 
 
    const baseUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=&order=market_cap_desc&per_page=100&page=1&sparkline=false"
 
   

    useEffect(() => {

      db.collection('portfolio').doc(auth.currentUser.uid).get().then((res)=>{
        if(res.data()){
          const formatData = res.data().coins.join(', ')
          
          coinSelection.push(formatData)
          console.log(coinSelection)
        }
      })

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
     stagedCoins.push(selectedCoinID)
     console.log(stagedCoins)

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

    const currentUser = auth.currentUser
    console.log(currentUser)

    const uploadCoins = () => {
      
      db.collection('portfolio').doc(currentUser.uid).set({coins: coinSelection})
    }

    return (
   
      <Container >
           <Drawer />

        <Grid container spacing={4}>
          <Grid item xs={12}>
          <TextField  label="Search for a Crypto" onChange={getSearchText}/>
          </Grid>
          <Grid item xs={12}>
          <Link to="/portfolio" style={{textDecoration: 'none'}}>
            <Button onClick={uploadCoins} endIcon={<ArrowForwardIosIcon/>} size="large" variant="outlined" color="primary"><Typography variant="button" >Go to portfolio</Typography></Button>
            </Link>
            </Grid>

            {!coins && <Loading />}
          
           
            {coins && searchText.length > 0 && coins.filter(coin => coin.id === searchText).map(filteredCoins => 
            
            
            (
               <span className={styles.cryptoCard}><CryptoCard coin={filteredCoins} getSearchText={getSearchText} addCrypto={addCryptoToPort} /></span> 
            )
            )}
         

         
           
            {coins && searchText.length === 0 && coins.map((coin) => {
                return ( 
                  <Grid item xl={3} md={4} xs={6} >
                  <CryptoCard stagedCoins={stagedCoins} coin={coin}   />
                  </Grid>
                
                )
            })}
            
            
            </Grid> 
            </Container>
    )
}

export default CardDisplay
