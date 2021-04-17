import axios from 'axios'
import { Dispatch } from 'redux'

import * as actionTypes from './actionTypes'

const getSightings = (sightings: ISighting[]) => {
    return {
        type: actionTypes.GET_SIGHTINGS,
        sightings
    }
}

const getYesterday = (sightings: ISighting[]) => {
    return {
        type: actionTypes.GET_YESTERDAY,
        sightings
    }
}

export const fetchSightings = () => async (dispatch: Dispatch) => {
    try {
        const res = await axios.get('http://localhost:8000/api/sightings/')
        console.log("Ah shit were in this bitch", res);

        dispatch(getSightings(res.data))
    } catch (err) {
        console.error(err);
    }
}
