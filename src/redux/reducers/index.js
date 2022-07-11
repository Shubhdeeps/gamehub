import { combineReducers } from "redux";
import { games } from "./games.reducer";
import { users } from "./users.reducers";
import { alerts } from "./alert.reducer";
export default combineReducers({
games,
users, 
alerts
})