import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 600,  
    },
   },
  notchedOutline: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
}));
export default function Field(props){
  const classes = useStyles();
    return(
      <TextField
          disabled
          id={props.id}
          label={props.label}
          defaultValue={props.value}
          variant="outlined"
          name={props.name}
          style={{flexGrow: 1}}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
    )
}
