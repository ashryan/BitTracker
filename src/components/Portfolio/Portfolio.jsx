import React, { useEffect, useState } from 'react'
import PortCryptoList from './PortCryptoList'
import data from "../../data/coin-selection.json"

const Portfolio = () => {

    const coinsToGet = data.join(", ")

    const [coins, setCoins] = useState(null)
  


    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=${coinsToGet}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h`).then(res => {
          return res.json()
         }).then(data => {
           setCoins(data)
           return coins
         })
  
      },[])

    return (
        <div>
            { coins && <PortCryptoList coins = {coins}/> }
        </div>
    )
}

export default Portfolio
