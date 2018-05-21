import { createStore } from "redux";
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/index";

const logger = createLogger();
const store = createStore(rootReducer);



export default store;