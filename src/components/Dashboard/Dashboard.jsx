import React, { useEffect, useState } from 'react'
import Container from "@material-ui/core/Container"
import Drawer from "../Drawer"
import { auth, db } from "../../firebase"
import { Grid, Card, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from "@material-ui/core/"
import Top10PriceChangeTable from "../Top10PriceChangeTable"
import Top5PriceDecreaseTable from "../Top10PriceDecreaseTable"


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
        
        <Container spacing={1} >
            <Drawer />
            <h1>Welcome, {auth.currentUser.email}</h1>
            {coins &&
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Card style={{minHeight:"150px", marginBottom:"50px"}} raised ><h3>Check your portfolio?</h3> 
                        <Button variant="outlined" color="primary">Go To Portfolio</Button>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card style={{minHeight:"150px", marginBottom:"50px"}} raised><h3>Add coins to your portfolio?</h3>
                        <Button variant="outlined" color="primary">Add New Coins</Button>
                        
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    {coins && <Top10PriceChangeTable coins={coins}/> }
                </Grid>

                <Grid item xs={12}>
                {coins && <Top5PriceDecreaseTable coins={coins}/>}
                </Grid>
            </Grid>

                    
            }

            
           




        </Container>
      
            
        
    )
}

export default Dashboard
