import { StylesProvider } from '@material-ui/styles'
import React, { useState, useRef } from 'react'
import styles from "./PortCryptoCard.module.scss"
import { Card, Grid, Container, Typography, TextField } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const PortCryptoCard = (props) => {

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

    const placeholderText = `Input amount of ${props.coin.name}`

    return (
        <Container >
        <Grid container spacing={4}>
            <Grid item xs={12}>
            <Card variant="filled" raised>
                <Typography gutterBottom variant="h4">{props.coin.name}</Typography>
                <Typography color="primary" gutterBottom>Current Price: £{props.coin.current_price}</Typography>
                {/* <p>1hr Change: {props.coin.price_change_percentage_1h_in_currency}%</p> */}
                <Typography  color="primary" gutterBottom>24hr Change: {props.coin.price_change_percentage_24h}%</Typography>
                <TextField onChange={displayAmount} type="number" inputRef={inputAmount}  placeholder={placeholderText}></TextField>
                <Typography type="number" color="primary" gutterBottom >Your {props.coin.name} is worth £{amount * props.coin.current_price}</Typography>
                <Chart data={props.coin.sparkline_in_7d.price}>
                    <ValueAxis />
                    <LineSeries valueField="lineValue" />
            

                </Chart>
            </Card>
            </Grid>
            </Grid>
            </Container>
    )
}

export default PortCryptoCard
