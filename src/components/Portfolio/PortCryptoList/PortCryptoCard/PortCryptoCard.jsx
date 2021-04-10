import { StylesProvider } from '@material-ui/styles'
import React, { useState, useRef } from 'react'
import styles from "./PortCryptoCard.module.scss"
import { Card, Grid, Container, Typography, TextField } from "@material-ui/core"
import NumberFormat from "react-number-format"
import { db, auth } from '../../../../firebase';
import Removed from "../../../Removed"
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

        const coins = {name:props.coin.name, amount:parseInt(inputAmount.current.value)}
        db.collection('value').doc(auth.currentUser.uid).set({[coin.id]:coins}, {merge:true})
    }

    const placeholderText = `Input amount of ${props.coin.name}`

    return (
        <Container >
        <Grid container spacing={4}>
            <Grid item xs={12}>
            <Card variant="filled" raised> 
                <Removed />
                <Typography gutterBottom variant="h4">{props.coin.name}</Typography>
                <Typography color="primary" gutterBottom>
                    <NumberFormat thousandSeparator prefix={"Current Price: £"} displayType="text" decimalScale={2} value={props.coin.current_price} d/>
                </Typography>
                {/* <p>1hr Change: {props.coin.price_change_percentage_1h_in_currency}%</p> */}
                <Typography  color="primary" gutterBottom>24hr Change: {props.coin.price_change_percentage_24h}%</Typography>
                <TextField onBlur={saveCoinAndWorth} onChange={displayAmount} type="number" inputRef={inputAmount}  placeholder={placeholderText}></TextField>
                <Typography type="number" color="primary" gutterBottom >Your {props.coin.name} is worth 
                    <NumberFormat thousandSeparator defaultValue={0} displayType="text" prefix={" £"} decimalScale={0} value={amount * props.coin.current_price} />
                </Typography>

            

                
            </Card>
            </Grid>
            </Grid>
            </Container>
    )
}

export default PortCryptoCard
