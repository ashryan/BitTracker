import React, { useEffect, useState } from 'react'
import { Card, Typography, Grid } from '@material-ui/core'
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
                <Card raised>
                    <Grid container>
                        <Grid item md={6}>
                            <Typography style={{paddingTop:"20px"}} variant="h4">{props.coin[1].name}</Typography>
                            
                        </Grid>
                       
                        <Grid item md={6}>
                        <Typography style={{paddingTop:"20px"}}>
                            You have {props.coin[1].amount} {props.coin[1].name}

                        </Typography>
                       
                        <Typography style={{marginBottom:"3%"}} color="secondary">
                            Your {props.coin[1].name} is worth
                            <NumberFormat thousandSeparator prefix={" £"} displayType="text" value={price * props.coin[1].amount} />
                        </Typography>
                        
                        </Grid>
                    </Grid>
                   
                </Card>
               
            }
        </>
       
    )
}

export default WalletCard
