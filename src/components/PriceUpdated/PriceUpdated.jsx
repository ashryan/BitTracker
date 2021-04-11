import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    }},

    icon: {
        margin: "5px 0px",
        '&:hover':{
          color: "pink",
          cursor: "pointer"
          
        },
      
      iconClicked :{
          color: "white"
  }
}}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const {saveCoinAndWorth, displayAmount, inputAmount, placeholderText} = props;

  const handleBlur = () => {
    setOpen(true);
    saveCoinAndWorth()
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
{/* <TextField onBlur={saveCoinAndWorth} onChange={displayAmount} type="number" inputRef={inputAmount}  placeholder={placeholderText}></TextField> */}
  return (
    <div className={classes.root}>
       
      <TextField type="number" className={classes.icon} color="secondary" onChange={displayAmount} onBlur={handleBlur} inputRef={inputAmount} placeholder={placeholderText}    />
     
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
            {`Amount of ${props.coin.name} held updated`}
         
        </Alert>
      </Snackbar>
     
    </div>
  );
}