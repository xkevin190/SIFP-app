import {combineReducers} from 'redux';
import init from './init';
import user from './user'

export default combineReducers({
  init,user
});