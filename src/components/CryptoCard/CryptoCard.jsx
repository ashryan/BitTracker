import React from 'react'
import "./CryptoCard.module.scss"


const CryptoCard =  (props) => {




   

        console.log(props.coin)


       return (
        <div className="crypto-card">

            <h1>{props.coin.name}</h1>
            <p>Symbol: {props.coin.symbol}</p>
            <p>Current Price: £{props.coin.current_price}</p>

       
         

        </div>
    )

    }
export default CryptoCard
