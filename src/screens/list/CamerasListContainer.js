import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CamerasList from './CamerasList';
import { deleteCamerasRequest, getCamerasRequest } from '../thunks';
import { openModal } from './listSlice';

function mapStateToProps(state) {
  const cameras = state.cameras;
  return {
    cameras: cameras.slice().reverse(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCameras: () => dispatch(getCamerasRequest()),
    delete: (id) => dispatch(deleteCamerasRequest(id)),
    openModal: () => dispatch(openModal()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamerasList)
);
