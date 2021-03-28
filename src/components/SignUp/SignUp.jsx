import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Typography,  TextField, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'

const SignUp = () => {
    return (
        <Container>
            <form>
            <Grid container spacing={1}>
                <Grid item sm={12}>
                    <TextField type="email" required label="Email" helperText="e.g John@example.com" />
                </Grid>
                <Grid item sm={12}>
                    <TextField type="name" required label="Full Name"
                helperText="John Smith" />
                </Grid>
                <Grid item sm={12}>
                    <TextField type="password" required label="Password" h
                helperText="At least 8 characters" />
                </Grid>
                <Grid  item sm={12}>
                    <Button mt={3} variant="contained" color="primary" >Submit</Button>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1">Already have an account? <Link to="/login">Click here </Link></Typography>
                </Grid>
            </Grid>

            </form>
        </Container>
    )
}

export default SignUp
