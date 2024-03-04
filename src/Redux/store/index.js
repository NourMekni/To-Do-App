import React from 'react';
import {createStore} from "redux";
import Reducer from '../reducers/ReducerTask';
import ReducerTask from "../reducers/ReducerTask";
const store = createStore(
 Reducer, 
 window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
) ;


export default store;
