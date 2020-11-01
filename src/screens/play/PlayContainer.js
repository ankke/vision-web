import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCamerasRequest,
  killCamerasRequest,
  takePhotoRequest,
} from '../thunks';
import { showCamera } from '../../api/apiConf';
import Play from './Play';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    src: showCamera(id),
    camera: state.cameras.list.find((cam) => cam.id === parseInt(id)),
  };
};
function mapDispatchToProps(dispatch) {
  return {
    killCamera: (id) => dispatch(killCamerasRequest(id)),
    takePhoto: (id) => dispatch(takePhotoRequest(id)),
    getCameras: () => dispatch(getCamerasRequest()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
