import React, { useEffect, useState }from 'react'
import PortCryptoCard from "./PortCryptoCard"

const PortCryptoList = (props) => {

    

    return (
        <div>
            {
                props.coins.map((coin) => {
                  return  <PortCryptoCard coin={coin} />
                })
            }
        </div>
    )
}

export default PortCryptoList
