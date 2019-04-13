import { combineReducers } from 'redux';
import { loadUserData, isAuthorized } from './user';

export default combineReducers({
  loadUserData,
  isAuthorized
});
