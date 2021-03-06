import React from 'react';
import { Box, Container, createStyles, makeStyles, Theme, Divider } from '@material-ui/core';
import OutlinedCard from './Card';
import SightingsContainer from './SightingsContainer';
import Footer from './Footer';
import Header from './Header';
import ButtonContainer from './Button';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
  },
}));

const AppContainer: () => JSX.Element = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Header />
      <Container maxWidth="xs" style={{ paddingTop: 40 }}>
        <OutlinedCard />
        <ButtonContainer />
        <Divider />
        <SightingsContainer />
      </Container>
      <Footer />
    </Box>
  );
};

export default AppContainer;
