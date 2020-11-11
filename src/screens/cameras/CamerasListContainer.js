import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CamerasList from './CamerasList';
import {
  addCameraRequest,
  deleteCamerasRequest,
  editCameraRequest,
  getCamerasRequest,
} from '../thunks';
import { openModal } from '../utils/modals/modalsSlice';
import { setCurrent } from './camerasSlice';

function mapStateToProps(state) {
  const cameras = state.cameras.list;
  return {
    cameras: cameras.slice().reverse(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCameras: () => dispatch(getCamerasRequest()),
    delete: (id) => dispatch(deleteCamerasRequest(id)),
    openModal: (modalId) => dispatch(openModal(modalId)),
    addCamera: (camera) => dispatch(addCameraRequest({ camera })),
    editCamera: (camera) => dispatch(editCameraRequest({ camera })),
    setCurrent: (camera) => dispatch(setCurrent(camera)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamerasList)
);
