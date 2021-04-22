import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      padding: '16px'

    },
    button: {
      borderRadius: 20,
      width: '75%'
      // backgroundColor: theme.palette.primary.main
    }
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" target="_blank" href="https://newportwhales.com/whalewatchingprices.html" className={classes.button}>
        Reserve a Trip
      </Button>
    </div>
  );
}
