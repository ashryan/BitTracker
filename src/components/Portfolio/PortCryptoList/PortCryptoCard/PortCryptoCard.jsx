import { StylesProvider } from '@material-ui/styles'
import React, { useState, useRef } from 'react'
import styles from "./PortCryptoCard.module.scss"

const PortCryptoCard = (props) => {

    
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
            <input onChange={displayAmount} type="number" ref={inputAmount}  placeholder={placeholderText}></input>
            <p>Your {props.coin.name} is worth £{amount * props.coin.current_price}</p>
        </div>
    )
}

export default PortCryptoCard
