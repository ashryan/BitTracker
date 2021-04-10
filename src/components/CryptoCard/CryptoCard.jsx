import React from 'react'
import "./CryptoCard.module.scss"
import styles from "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoSelection from "../../data/coin-selection.json"
import { Typography, makeStyles, Card } from "@material-ui/core"
import { sizing } from '@material-ui/system';
import { auth, db} from '../../firebase'
import Success from "../Success"
import NumberFormat from "react-number-format"

 



 
 
 
const CryptoCard =  (props) => {

  

    const {coin, addCrypto, stagedCoins} = props;

      const currentUser = auth.currentUser.uid;
     
        
        const num = 3000
       
        const addFav = (e) => {
          coin.isFav = true;
          cryptoSelection.push(coin.id)

          console.log(cryptoSelection)
          
      }
       
       return (
            <Card style={{minHeight:"360px"}} raised > 
                  
                                 
                    <Typography color="textPrimary" variant="h3">
                        {coin.name}
                     </Typography>
                    
               
                    <Typography style={{padding:"5px"}} gutterBottom="true" color="secondary">
                     Symbol: {coin.symbol.toUpperCase()}
                    </Typography>
                   
                    <Typography style={{padding:"5px"}} gutterBottom="true" color="secondary">
                      <NumberFormat prefix={'Current Price: £'} thousandSeparator displayType="text" value={coin.current_price} /> 
                    </Typography>
                    <Typography style={{padding:"5px"}} gutterBottom="true" color="secondary">
                    All Time High: {coin.ath}
                    </Typography>
                    <Typography style={{padding:"5px"}} gutterBottom="true" color="secondary">
                     Market Cap Rank: {coin.market_cap_rank}
                    </Typography>
                    <img className={styles.cardImg} src={coin.image} alt="Coin"></img>
                    <Success coinName={coin.name} addFav={addFav} />
               
               
                </Card>
    )

    }
export default CryptoCard
