import { applyMiddleware, createStore, Dispatch, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";


const store: Store<SightingState, SightingAction> & {
    dispatch: Dispatch
} = createStore(reducer, applyMiddleware(thunk))

export default store