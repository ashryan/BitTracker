import React from 'react'
import Container from "@material-ui/core/Container"
import Drawer from "../Drawer"
import { auth } from "../../firebase"

const Dashboard = () => {
    return (
        <Container >
            <Drawer />
            <h1>Hi {auth.currentUser.email}</h1>





        </Container>
            
        
    )
}

export default Dashboard
