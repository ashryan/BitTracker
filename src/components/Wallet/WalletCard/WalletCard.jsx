import React, { useEffect, useState } from 'react'
import { Card, Typography } from '@material-ui/core'
import  NumberFormat  from 'react-number-format'

const WalletCard = (props) => {
 
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState(0)
   

    useEffect(() => {
      
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${props.coin[0]}&vs_currencies=gbp`)
        .then((res) => {
            return res.json()
        }).then((data) => {
           
         setPrice(data[props.coin[0]].gbp)
         
         
         
        })
        
    }, [])

    return (
        <>
            {price &&
                <Card>

                    <h1>{props.coin[1].name}</h1>
                    <Typography color="secondary"><NumberFormat thousandSeparator prefix={"£"} displayType="text" value={price * props.coin[1].amount} />
                    </Typography>
                </Card>
            }
        </>
       
    )
}

export default WalletCard
