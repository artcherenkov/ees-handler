import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";

export const Namespace = {
  STATE: `STATE`
};

export default combineReducers({
  [Namespace.STATE]: appState,
});
