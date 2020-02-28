import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ModalMain from '../../containers/ModalMain/ModalMain';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const styles = theme => ({
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

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  
}))(MuiDialogContent);


export default function Open() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{position: 'absolute', top: '50%', left: '50%'}}>
        Open
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div>
            <label htmlFor="text-button-file">
              <Button 
                style={{textTransform: 'none'}}
                startIcon={<Icon>get_app</Icon>}>
                Import Customers Base
              </Button>
            </label>
            <input
              accept="image/*"
              style={{display: 'none'}}
              id="outlined-button-file"
              multiple
              type="file"
              
            />
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography component="div">
            <Box fontWeight="fontWeightBold">
              Fields from uploaded CSV file
            </Box>
            <Box fontWeight="400" color="#ccc">
              <p>Please choose correct columns and click <span style={{fontWeight: '800'}}> Show Table Preview </span>  to see your imported data. <span style={{fontWeight: '800', color: '#3f51b5'}}> Send us your base file </span> and we'll import it ourselves if you have any problems with that </p>
            </Box>
          
          </Typography>
          <ModalMain />
        </DialogContent>
      </Dialog>
    </>
  );
}

