import { combineReducers } from '@reduxjs/toolkit';
import reducer from './screens/camerasSlice';

export default combineReducers({
  cameras: reducer,
});
