import { StylesProvider } from '@material-ui/styles'
import React, { useState, useRef } from 'react'
import styles from "./PortCryptoCard.module.scss"
import { LineChart, Line } from 'recharts';

const PortCryptoCard = (props) => {

    const sparkLineData = [{x:12, y:12, value:240}]
    
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
        <div className={styles.cardDiv}>
            <h1>{props.coin.name}</h1>
            <p>Current Price: £{props.coin.current_price}</p>
            {/* <p>1hr Change: {props.coin.price_change_percentage_1h_in_currency}%</p> */}
            <p>24hr Change: {props.coin.price_change_percentage_24h}%</p>
            <input onChange={displayAmount} type="number" ref={inputAmount}  placeholder={placeholderText}></input>
            <p>Your {props.coin.name} is worth £{amount * props.coin.current_price}</p>
            <LineChart width={400} height={400} data={sparkLineData}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default PortCryptoCard
