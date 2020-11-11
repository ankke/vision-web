import { combineReducers } from '@reduxjs/toolkit';
import camerasReducer from './screens/camerasSlice';
import modalsReducer from './screens/utils/modals/modalsSlice';

export default combineReducers({
  cameras: camerasReducer,
  modals: modalsReducer,
});
