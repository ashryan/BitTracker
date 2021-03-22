import { StylesProvider } from '@material-ui/styles'
import React, { useState } from 'react'
import styles from "./PortCryptoCard.module.scss"

const PortCryptoCard = (props) => {

    const {amount, setAmount} = useState(0)

    const placeholderText = `Input amount of ${props.coin.name}`

    return (
        <div className={styles.cardDiv}>
            <h1>{props.coin.name}</h1>
            <p>Current Price: £{props.coin.current_price}</p>
            <input value={amount} placeholder={placeholderText}></input>
            <p>Your {props.coin.name} is worth {amount * props.coin.current_price}</p>
        </div>
    )
}

export default PortCryptoCard
