import React, { useEffect, useState } from 'react'
import PortCryptoList from './PortCryptoList'
import data from "../../data/coin-selection.json"
import { db, auth } from "../../firebase"
import Drawer from "../Drawer"
import Loading from "../Loading"
import { render } from '@testing-library/react'
import { Typography } from "@material-ui/core"



const Portfolio = () => {

 


   

    const [coins, setCoins] = useState(null)
  


    useEffect(() => {

        
      var coinsToGet =[];

      const getCoinsFromFirestore = db.collection('portfolio').doc(auth.currentUser.uid).get().then((res)=>{
        let returnedData = res.data()

        if(returnedData == undefined){
           return 
           
         
        }else {
        
          coinsToGet = returnedData.coins.join(", ")
          console.log(coinsToGet)
        }
        
            
        }).then(()=>{
            
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=${coinsToGet}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h`).then(res => {
          return res.json()
          }).then(data => {
              setCoins(data)
              return coins
              })
            }

          )


          }, [])
            
       
    return (
    
        <div>
          <Drawer />
          {!coins && <Loading/>}
            { coins && <PortCryptoList coins = {coins}/> }
        </div>
    )
}

export default Portfolio
