import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchSightings } from './store/actionCreators';
import AppContainer from './components/AppContainer';

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchSightings())
  }, [])

  // const sightings: ISighting[] = useSelector((state: SightingState) => state.sightings)

  // console.log(sightings);

  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;
