import { connect } from 'react-redux';
import Modal from './CameraModal';
import {
  addCameraRequest,
  editCameraRequest,
  getCameraRequest,
} from '../thunks';

function mapStateToPropsEdit(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    cameraId: id,
    camera: state.cameras.current,
  };
}

function mapDispatchToPropsEdit(dispatch) {
  return {
    action: (camera) => dispatch(editCameraRequest({ camera })),
    getCamera: (cameraId) => dispatch(getCameraRequest(cameraId)),
  };
}

export const EditCameraModal = connect(
  mapStateToPropsEdit,
  mapDispatchToPropsEdit
)(Modal);

function mapDispatchToPropsAdd(dispatch) {
  return {
    action: (camera) => dispatch(addCameraRequest({ camera })),
  };
}

export const AddCameraModal = connect(null, mapDispatchToPropsAdd)(Modal);
