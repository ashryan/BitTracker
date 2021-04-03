import React, { useEffect, useState } from 'react'
import Container from "@material-ui/core/Container"
import Drawer from "../Drawer"
import { auth, db } from "../../firebase"
import { Grid, Card } from '@material-ui/core'


const Dashboard = () => {

    const [coins, setCoins] = useState(false)

    var returnedData = ''

    useEffect(()=> {
        db.collection('portfolio').doc(auth.currentUser.uid).get().then((res)=>{
             returnedData = res.data().coins;
             console.log(returnedData)
             returnedData = returnedData.join(", ")
            setCoins(true)
            
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






        </Container>
      
            
        
    )
}

export default Dashboard
