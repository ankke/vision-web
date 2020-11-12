import { combineReducers } from '@reduxjs/toolkit';
import camerasReducer from './screens/cameras/camerasSlice';
import presetsReducer from './screens/presets/presetsSlice';
import modalsReducer from './screens/utils/modals/modalsSlice';

export default combineReducers({
  cameras: camerasReducer,
  presets: presetsReducer,
  modals: modalsReducer,
});
