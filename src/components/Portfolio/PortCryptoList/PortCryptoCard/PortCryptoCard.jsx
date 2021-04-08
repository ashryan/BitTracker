import { StylesProvider } from '@material-ui/styles'
import React, { useState, useRef } from 'react'
import styles from "./PortCryptoCard.module.scss"
import { Card, Grid, Container, Typography, TextField } from "@material-ui/core"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Paper from '@material-ui/core/Paper';
import { db, auth } from '../../../../firebase';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const PortCryptoCard = (props) => {

    const {coin} = props

    

    let trendLineData = []
    
    const yo = [props.coin.sparkline_in_7d.price]

    console.log(yo)

   
    // sparkLineData.push(props.coin.sparkline_in_7d.price)
    // console.log(sparkLineData)

    const [amount, setAmount] = useState(0)
   
   
    const displayAmount = () => {
        const intValue = (parseInt(inputAmount.current.value))
        setAmount(intValue)
        console.log(inputAmount)
        console.log(inputAmount.current.value)
    }

    
    
    const inputAmount = useRef(null)

    const cryptoWorth = (num, price)=> {

        return num * price

    }

    const removeCoin = () => {
        db.collection('portfolio').doc(auth.currentUser.uid).where('coins.')
    }

    const saveCoinAndWorth = () => {

        const coins = [{name:props.coin.name, amount:parseInt(inputAmount.current.value)}]
        db.collection('value').doc(auth.currentUser.uid).set({[coin.id]:coins}, {merge:true})
    }

    const placeholderText = `Input amount of ${props.coin.name}`

    return (
        <Container >
        <Grid container spacing={4}>
            <Grid item xs={12}>
            <Card variant="filled" raised>
                <HighlightOffIcon />  
                <Typography gutterBottom variant="h4">{props.coin.name}</Typography>
                <Typography color="primary" gutterBottom>Current Price: £{props.coin.current_price}</Typography>
                {/* <p>1hr Change: {props.coin.price_change_percentage_1h_in_currency}%</p> */}
                <Typography  color="primary" gutterBottom>24hr Change: {props.coin.price_change_percentage_24h}%</Typography>
                <TextField onBlur={saveCoinAndWorth} onChange={displayAmount} type="number" inputRef={inputAmount}  placeholder={placeholderText}></TextField>
                <Typography type="number" color="primary" gutterBottom >Your {props.coin.name} is worth £{amount * props.coin.current_price}</Typography>

            

                
            </Card>
            </Grid>
            </Grid>
            </Container>
    )
}

export default PortCryptoCard
