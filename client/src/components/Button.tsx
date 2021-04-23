import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '20px 0 40px 0'
    },
    button: {
      borderRadius: 20,
      width: 300
    }
  }),
);

const ButtonContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" target="_blank" href="https://newportwhales.com/whalewatchingprices.html" className={classes.button} disableElevation>
        Reserve a Trip
      </Button>
    </div>
  );
}

export default ButtonContainer