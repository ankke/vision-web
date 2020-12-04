import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCamerasForPresetRequest, getPresetRequest } from './thunks';
import PresetCameras from './PresetCameras';
import { setCurrent } from '../cameras/camerasSlice';
import { openModal } from '../utils/modals/modalsSlice';

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  const { camerasList, preset } = state.presets.details;
  return {
    cameras: camerasList.slice().reverse(),
    presetId: id,
    preset: preset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCamerasForPreset: (presetId) =>
      dispatch(getCamerasForPresetRequest(presetId)),
    setCurrent: (camera) => dispatch(setCurrent(camera)),
    openModal: (modalId) => dispatch(openModal(modalId)),
    getPreset: (presetId) => dispatch(getPresetRequest(presetId)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PresetCameras)
);
