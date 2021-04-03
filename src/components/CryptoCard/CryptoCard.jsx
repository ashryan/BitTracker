import React from 'react'
import "./CryptoCard.module.scss"
import styles from "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoSelection from "../../data/coin-selection.json"
import { Typography, makeStyles, Card } from "@material-ui/core"
import { sizing } from '@material-ui/system';
import { auth, db} from '../../firebase'
import Success from "../Success"

 



 
 
 
const CryptoCard =  (props) => {

  

    const {coin, addCrypto, stagedCoins} = props;

      const currentUser = auth.currentUser.uid;
     
        
 
       
        const addFav = (e) => {
          coin.isFav = true;
          cryptoSelection.push(coin.id)

          console.log(cryptoSelection)
          
      }
       
       return (
            <Card height={20} raised > 
                  
                                 
                    <Typography color="textPrimary" variant="h3">
                        {coin.name}
                     </Typography>
                    
               
                    <Typography gutterBottom="true" color="secondary">
                     Symbol: {coin.symbol.toUpperCase()}
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
                    <img className={styles.cardImg} src={coin.image} alt="Coin"></img>
                    <Success coinName={coin.name} addFav={addFav} />
               
               
                </Card>
    )

    }
export default CryptoCard
