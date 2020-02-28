import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
   root: {
    border: '1px solid red'
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
      marginLeft: 0,
      marginRight: 0,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
      
   },
   menuItem: {
     color: '#3f51b5',
   },
   
   selectClass: {
     border: 'none',
     borderTopLeftRadius: 0,
     borderBottomLeftRadius: 0,
     color: '#3f51b5',
     boxSizing: 'border-box'
   },
   labelClass: {
    color: '#3f51b5',
   },
   
}));

export default function SelectElement(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="label" className={classes.labelClass}>Select value
        </InputLabel>
        
        <Select
          variant='outlined'
          className={classes.selectClass}
          labelId="label"
          labelWidth={labelWidth}
          value={props.value}
          onChange={props.handleChange}   
          id = {props.id}
          name={props.name}	
          
          IconComponent={() => (
            <Icon style={{color: '#3f51b5', paddingRight: '10px'}}>expand_more</Icon>
          )}    
          
        >
          
          <MenuItem value='Select value' disabled>Select value</MenuItem>
          { props.options.map(option => {
              return(
                <MenuItem 
                  key={option}
                  className={classes.menuItem} 
                  value={option}
                  label={option}
                  >{option}
                </MenuItem>
              ) 
            })
          } 
        </Select>
      </FormControl>
  );
}


