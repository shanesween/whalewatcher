import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@material-ui/core';
import theme from './theme';
import OutlinedCard from './components/Card';
import ContainedButtons from './components/Button';
import ScrollableTabsButtonAuto from './components/TabContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSightings } from './store/actionCreators';

const App = () => {


  const sightings: ISighting[] = useSelector((state: SightingState) => state.sightings)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchSightings())
  }, [])

  console.log("We really out here in a component?", sightings);






  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box component="div" style={{ height: '100vh' }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Newport Whales
            </Typography>
          </Box>
          <Box>
            <OutlinedCard />
          </Box>
          <Box>
            <ContainedButtons />
          </Box>
          <Box>
            <ScrollableTabsButtonAuto />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
