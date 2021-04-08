import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Container, Typography,  TextField, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import { useAuth, AuthProvider } from '../../context/AuthContext/AuthContext'
import Alert from "@material-ui/lab/Alert"
import { db, auth } from "../../firebase"

const SignUp = () => {

    const emailRef = useRef()

    const passRef = useRef()
    const passConfRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(emailRef.current.value)
        if (passRef.current.value !== passConfRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passRef.current.value)
            history.push("/login")
        } catch(err) {

            console.log(err)
            setError('Failed to create an account')
        }

        setLoading(false)

       
        
    }

    return (
    
            <Container>
                <Card raised >
                <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                
                    <Grid item xs={12}>
                        <Typography variant="h4" color="textPrimary">Sign Up</Typography>
                    </Grid>
                    {error && 
                    <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}
                    <Grid item xs={12}>
                        <TextField id="email" inputRef={emailRef} type="email" required label="Email" helperText="e.g John@example.com" />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField id="password" type="password" inputRef={passRef} required label="Password" h
                    helperText="At least 8 characters" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="passwordConf" type="password" required label="Confirm Password" helperText="Must match" inputRef={passConfRef} />
                    </Grid>
                    <Grid  item xs={12}>
                        <Button  type="submit" mt={3} disabled={loading} variant="contained" color="primary" >Submit</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom mb={2} variant="body1">Already have an account? <Link to="/login"> Click here </Link></Typography>
                    </Grid>
                </Grid>

                </form>
                </Card>
            </Container>
     
       
    )
}

export default SignUp
