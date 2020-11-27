import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addPresetRequest,
  deletePresetRequest,
  editPresetRequest,
  getPresetsRequest,
} from './thunks';
import { openModal } from '../utils/modals/modalsSlice';
import { setCurrent } from './presetsSlice';
import PresetsScreen from './PresetsScreen';
import {editCameraRequest, getCamerasRequest} from '../cameras/thunks';

function mapStateToProps(state) {
  const presets = state.presets.list;
  return {
    presets: presets.slice().reverse(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPresets: () => dispatch(getPresetsRequest()),
    getCameras: () => dispatch(getCamerasRequest()),
    delete: (id) => dispatch(deletePresetRequest(id)),
    openModal: (modalId) => dispatch(openModal(modalId)),
    addPreset: (preset) => dispatch(addPresetRequest({ preset })),
    editPreset: (preset) => dispatch(editPresetRequest({ preset })),
    setCurrent: (preset) => dispatch(setCurrent(preset)),
    editCamera: (camera) => dispatch(editCameraRequest({ camera })),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PresetsScreen)
);
