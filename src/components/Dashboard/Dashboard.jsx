import React, { useEffect, useState } from 'react'
import Container from "@material-ui/core/Container"
import Drawer from "../Drawer"
import { auth, db } from "../../firebase"
import { Grid, Card } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from "@material-ui/core/"
import Top10PriceChangeTable from "../Top10PriceChangeTable"


const Dashboard = () => {

    const [coins, setCoins] = useState(false)

    var returnedData = ''

    useEffect(()=> {
         fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&category=decentralized_finance&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h").then((res) => {
            return res.json()
            
         }).then((data) =>{
             console.log(data)
            const sortedData = data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
             console.log(sortedData)
             setCoins(sortedData)
         })
            
         
       
    },[])


    return (
        
        <Container >
            <Drawer />
            <h1>Welcome, {auth.currentUser.email}</h1>
            {coins &&
            <Grid container>
                <Grid item>
                    <Card><h3>Check your portfolio?</h3> 
                        <p>{returnedData} coins in your portfolio</p>
                    </Card>
                </Grid>
            </Grid>

                    
            }

            
            {coins && <Top10PriceChangeTable coins={coins}/> }




        </Container>
      
            
        
    )
}

export default Dashboard
