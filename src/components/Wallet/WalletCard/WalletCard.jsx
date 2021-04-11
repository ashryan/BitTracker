import React, { useEffect, useState } from 'react'
import { Card, Typography } from '@material-ui/core'
import  NumberFormat  from 'react-number-format'
import Drawer from "../../Drawer"

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

            <Drawer />
        
            {price &&
                <Card>

                    <h1>{props.coin[1].name}</h1>
                    <Typography>
                        You have {props.coin[1].amount} {props.coin[1].name}

                    </Typography>
                    <Typography color="secondary">
                        Your {props.coin[1].name} is worth
                        <NumberFormat thousandSeparator prefix={" £"} displayType="text" value={price * props.coin[1].amount} />
                    </Typography>
                </Card>
            }
        </>
       
    )
}

export default WalletCard
