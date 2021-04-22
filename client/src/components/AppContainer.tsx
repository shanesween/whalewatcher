import React from 'react';
import { Box, Typography, Container, createStyles, makeStyles, Theme, Divider } from '@material-ui/core';
import ContainedButtons from './Button';
import OutlinedCard from './Card';
import ScrollableTabsButtonAuto from './TabContainer';
import SightingsContainer from './SightingsContainer';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh'
    },
    headerContainer: {
      height: 100,
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }),
);

const AppContainer = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Box className={classes.headerContainer}>
        <Typography variant="h4" color="textSecondary">
          Newport Whales
        </Typography>
      </Box>
      <Container maxWidth="xs">
        <OutlinedCard />
        <Box>
          <ContainedButtons />
        </Box>
        <Divider />
        <Box>
          <SightingsContainer />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default AppContainer;
