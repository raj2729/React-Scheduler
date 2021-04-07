import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import eventReducer from "./calendar.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth : authReducer,
  user : userReducer,
  event : eventReducer,//Gives state according to switch case
  // And that switch case is defined by the constant we get from action
})

export default rootReducer;

// export default (state : {name : "Raj"} , action ) => {
//   return state;
// }