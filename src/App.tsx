import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@material-ui/core';
import theme from './theme';
import OutlinedCard from './Card';
import ContainedButtons from './Button';
import ScrollableTabsButtonAuto from './TabContainer';

function App() {
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
