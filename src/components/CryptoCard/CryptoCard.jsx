import React from 'react'
import "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoPortData from "../../data/coin-selection.json"
import Typography from "@material-ui/core/Typography"

const CryptoCard =  (props) => {

    const {coin, addCrypto} = props;

   
        const addFav = () => {
            coin.isFav = true;
            cryptoPortData.push(coin.id)
            console.log(cryptoPortData)
        }
        

       return (
            <div className="crypto-card">
                    <AddCircleOutlineOutlinedIcon onClick={addFav}/>
                    <Typography variant="h3">
                        {coin.name}
                     </Typography>
                    
               
                    <Typography gutterBottom="true" color="secondary">
                     Symbol: {coin.symbol}
                    </Typography>
                    <Typography gutterBottom="true" color="secondary">
                    Current Price: £{coin.current_price}
                    </Typography>
                    <Typography gutterBottom="true" color="secondary">
                    All Time High: {coin.ath}
                    </Typography>
                    <Typography gutterBottom="true" color="secondary">
                     Market Cap Rank: {coin.market_cap_rank}
                    </Typography>
                    
                    <img src={coin.image} alt="Coin"></img>
                    
                   
               
               
            </div>
      
    )

    }
export default CryptoCard
