import { combineReducers } from "redux";

const unit = (state=true, action) =>{
    switch(action.type){
        case "SWITCH":
            return !state
        default:
            return state
    }
}


export default combineReducers({unit})