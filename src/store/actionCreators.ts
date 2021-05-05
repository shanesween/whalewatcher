import axios from 'axios';
import { Dispatch } from 'redux';

import * as actionTypes from './actionTypes';

const getSightings = (sightings: ISighting[]) => ({
  type: actionTypes.GET_SIGHTINGS,
  sightings,
});

export const fetchSightings: () => (dispatch: Dispatch) => Promise<void> = (
) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('http://localhost:8000/api/sightings/');
    dispatch(getSightings(res.data));
  } catch (err) {
    console.error(err);
  }
};
