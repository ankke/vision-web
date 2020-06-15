import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CamerasList from './CamerasList';
import { getCamerasRequest } from '../thunks';

function mapStateToProps(state) {
  return {
    cameras: state.cameras,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCameras: () => dispatch(getCamerasRequest()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamerasList)
);
