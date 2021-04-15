import { GET_SIGHTINGS } from "./actionTypes"

const initialState: SightingState = {
    sightings: [],
    loading: true
}

const reducer = (state: SightingState = initialState, action: SightingAction): SightingState => {
    switch (action.type) {
        case GET_SIGHTINGS:
            return {
                ...state,
                sightings: action.sightings,
                loading: false
            }
        default: {
            return state
        }
    }
}

export default reducer