import React from 'react'
import "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoPortData from "../../data/coin-selection.json"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    icon: {
      '&:hover':{
        color: "pink",
        cursor: "pointer"
        
      },
    
    iconClicked :{
        color: "white"
    }
    }
  })
  

const CryptoCard =  (props) => {

    const classes = useStyles()

    const {coin, addCrypto} = props;

   
        const addFav = (e) => {
            coin.isFav = true;
            cryptoPortData.push(coin.id)
            alert(`${coin.name} added to portfolio`)
        }
        

       return (
            <div className="crypto-card">
                   
                    <Typography color="textPrimary" variant="h3">
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
                    <AddCircleOutlineOutlinedIcon className={classes.icon} color="action" fontSize="med" onClick={addFav}/>
                   
               
               
            </div>
      
    )

    }
export default CryptoCard
