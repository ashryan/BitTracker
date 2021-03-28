import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Typography,  TextField, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'

const SignUp = () => {

    const emailRef = useRef()
    const nameRef = useRef()
    const passRef = useRef()


    return (
        <Container>
             <Card raised >
            <form>
            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <Typography variant="h4" color="textPrimary">Sign Up</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="email" ref={emailRef} type="email" required label="Email" helperText="e.g John@example.com" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="name" type="name" ref={nameRef} required label="Full Name"
                helperText="John Smith" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" type="password" ref={passRef} required label="Password" h
                helperText="At least 8 characters" />
                </Grid>
                <Grid  item xs={12}>
                    <Button mt={3} variant="contained" color="primary" >Submit</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom mb={2} variant="body1">Already have an account? <Link to="/login">Click here </Link></Typography>
                </Grid>
            </Grid>

            </form>
            </Card>
        </Container>
    )
}

export default SignUp
