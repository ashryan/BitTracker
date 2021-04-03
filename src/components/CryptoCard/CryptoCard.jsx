import React from 'react'
import "./CryptoCard.module.scss"
import styles from "./CryptoCard.module.scss"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import cryptoSelection from "../../data/coin-selection.json"
import { Typography, makeStyles, Card } from "@material-ui/core"
import { sizing } from '@material-ui/system';
import { auth, db} from '../../firebase'

 

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

    const {coin, addCrypto, stagedCoins} = props;

      const currentUser = auth.currentUser.uid;
     
        // const addCoinToDB = () => {
        //   db.collection('portfolio').doc(currentUser).set(coin.id)
        // }
 
       
        const addFav = (e) => {
          coin.isFav = true;
          cryptoSelection.push(coin.id)

          console.log(cryptoSelection)
          alert(`${coin.name} added to portfolio`)
          // addCoinToDB()
      }
       
       return (
            <Card height={20} raised > 
                   
                                 
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
                    <img className={styles.cardImg} src={coin.image} alt="Coin"></img>
                    <AddCircleOutlineOutlinedIcon className={classes.icon} color="action" fontSize="med" onClick={addFav}/>
                   
               
               
                </Card>
    )

    }
export default CryptoCard
