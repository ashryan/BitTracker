import React, {useEffect, useState} from "react"
import WalletCard from './WalletCard'
import {db, auth} from "../../firebase"
import Drawer from "../Drawer" 
import { Button, Card, Container } from '@material-ui/core'

let response = ''

const Wallet = () => {

    const [loading, setLoading] = useState(false)

    

    useEffect(()=>{
        db.collection('value').doc(auth.currentUser.uid).get().then((res)=>{
            
          response = res.data()
          
          response = Object.entries(response)
          
          setLoading(true)
            
          return response

        }).then((response) => {

            let pricesToGet = []
            response.map((arr) => {
                pricesToGet.push(arr[0])
                
            }) 
            pricesToGet = pricesToGet.join(",")
            console.log(pricesToGet)

            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${pricesToGet}&vs_currencies=gbp`).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
            })
        })

    },[])
  
    console.log(response)

    return (
      
        <Container>
            <Drawer />
           
            <Card>
                {loading && response.map((coin) => {
                return <WalletCard key = {coin[0]} coin = {coin} />

                })}
            </Card>
  
       </Container>
    )
}

export default Wallet
