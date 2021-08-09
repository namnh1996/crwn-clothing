import { createStore, applyMiddleware } from "redux";

//using  for  debugging  redux  code
import logger from "redux-logger";

import rootReducer from './root-reducer';

// keep  in  mind  this  configuration  can  be  viewed  on  redux  doc
const middlewares = [logger];

const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
    );

export default store;


