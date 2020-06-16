import { combineReducers } from '@reduxjs/toolkit';
import camerasReducer from './screens/camerasSlice';
import listReducer from './screens/list/listSlice';

export default combineReducers({
  cameras: camerasReducer,
  list: listReducer,
});
