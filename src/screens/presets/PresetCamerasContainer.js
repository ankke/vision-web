import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCamerasForPresetRequest } from './thunks';
import PresetCameras from './PresetCameras';
import { setCurrent } from '../cameras/camerasSlice';
import { deleteCamerasRequest } from '../cameras/thunks';
import { openModal } from '../utils/modals/modalsSlice';

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  const cameras = state.presets.camerasList;
  return {
    cameras: cameras.slice().reverse(),
    presetId: id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCamerasForPreset: (presetId) =>
      dispatch(getCamerasForPresetRequest(presetId)),
    setCurrent: (camera) => dispatch(setCurrent(camera)),
    openModal: (modalId) => dispatch(openModal(modalId)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PresetCameras)
);
