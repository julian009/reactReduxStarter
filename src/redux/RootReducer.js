import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
// import stuff from './stuffReducer';

const RootReducer = combineReducers({
  // stuff
  routing: routerReducer
});

export default RootReducer;