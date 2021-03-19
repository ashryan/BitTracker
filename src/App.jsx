import logo from './logo.svg';
import './App.scss';
import CryptoCard from './components/CryptoCard/CryptoCard';
import SearchBar from './components/SearchBar/SearchBar'
import React, { useState, useEffect} from "react"
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'

function App() {

  const [coins, setCoins] = useState(null)
  

   const [searchText, setSearchText] = useState('')
 

 
    const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    
 
   
    const getCoin = ()=> { 
      fetch(baseUrl).then(res => {
       return res.json()
      }).then(data => {
        setCoins(data)
        return coins
      })
    }
   


    // const getSearchText = (event) => {
    //   setSearchText(event.target.value)
    //   console.log(searchText)
    // }
    
  

 


  return (
    <div className="App">

    <SearchBar  getCoin = {getCoin} />
     
    {coins && coins.map((coin)=>{
      
      return (
        <CryptoCard coin={coin}/>
      )
    })}

 
   
    </div>
  );
}

export default App;
