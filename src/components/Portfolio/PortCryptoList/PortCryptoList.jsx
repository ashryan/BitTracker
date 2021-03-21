import React from 'react'
import data from "../../../data/coin-selection.json"
import PortCryptoCard from "./PortCryptoCard"

const PortCryptoList = () => {
    return (
        <div>
            {
                data.map((coin) => {
                  return  <PortCryptoCard coin={coin} />
                })
            }
        </div>
    )
}

export default PortCryptoList
