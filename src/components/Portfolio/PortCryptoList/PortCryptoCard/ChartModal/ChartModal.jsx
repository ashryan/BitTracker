import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Chart from 'react-google-charts';
import AssessmentIcon from '@material-ui/icons/Assessment';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  let { priceSparkLine, coinName } = props;

   priceSparkLine = priceSparkLine[0] 
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let priceArray = []
  priceSparkLine.map((price, i) => {
    console.log(priceArray)     
    return priceArray.push([i, price])
    
   
})

  return (
    <div>
      <Button style={{marginBottom:"15px", marginTop:"5px"}} variant="outlined" color="primary" onClick={handleClickOpen}>
        View Chart <AssessmentIcon />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {coinName} 7 Day Price Trend 
        </DialogTitle>
        <DialogContent dividers>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[

                        ["x", "Price"],
                       
                        ...priceArray
                        
                    ]}
                    options={{
                       
                        hAxis: {
                        title: 'Time',
                        },
                        vAxis: {
                        title: `${coinName} Price (£)`,
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
