/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";

//store cartItems when app reload
import { persistStore } from 'redux-persist';

//using  for  debugging  redux  code
import logger from "redux-logger";

import rootReducer from './root-reducer';

import thunk from 'redux-thunk';


// keep  in  mind  this  configuration  can  be  viewed  on  redux  doc
const middlewares = [thunk];

// removing redux-loger from production build
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
    );

export const persistor = persistStore(store);

export default { store, persistor };


