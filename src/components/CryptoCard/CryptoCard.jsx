import React from 'react'
import "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoPortData from "../../data/coin-selection.json"


const CryptoCard =  (props) => {

    const {coin, addCrypto} = props;

   
        const addFav = () => {
            coin.isFav = true;
            cryptoPortData.push(coin.id)
            console.log(cryptoPortData)
        }
        

       return (
            <div className="crypto-card">

                <h1>{coin.name}</h1>
                <p>Symbol: {coin.symbol}</p>
                <p>Current Price: £{coin.current_price}</p>
                <p>All Time High: {coin.ath}</p>
                <p>Market Cap Rank: {coin.market_cap_rank}</p>
                <img src={coin.image} alt="Coin"></img>
                <AddCircleOutlineOutlinedIcon onClick={addFav}/>
            </div>
      
    )

    }
export default CryptoCard
