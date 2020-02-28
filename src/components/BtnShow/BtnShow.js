import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// GetApp
const useStyles = makeStyles(theme => ({
  button: {
    margin: '30px auto 0 auto',
    width: '100%'
  },
}));

export default function BtnShow(props) {
  const classes = useStyles();

  return (
    <>
      
      <Button
        // type="submit"
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<Icon>sync</Icon>}
        onClick= {props.action}
      >
        Show table preview
      </Button>
    </>
  );
}
