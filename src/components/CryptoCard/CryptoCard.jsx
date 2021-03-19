import React from 'react'
import "./CryptoCard.module.scss"


const CryptoCard =  (props) => {

    const {coin} = props;



   

        console.log(coin)


       return (
        <div className="crypto-card">

            <h1>{coin.name}</h1>
            <p>Symbol: {coin.symbol}</p>
            <p>Current Price: £{coin.current_price}</p>
            <p>All Time High: {coin.ath}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
            <img src={coin.image} alt="Coin"></img>
        </div>
    )

    }
export default CryptoCard
