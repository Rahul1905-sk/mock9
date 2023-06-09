import { applyMiddleware, combineReducers, legacy_createStore } from "redux"; 
import { reducer as AuthReducer  } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const allReducer = combineReducers({
    AuthReducer
})


export const store = legacy_createStore(allReducer, applyMiddleware(thunk))