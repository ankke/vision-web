import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCamerasRequest,
  killCamerasRequest,
  killCamerasRequestWithoutClosing,
  showCameraRequest,
  takePhotoRequest,
} from '../cameras/thunks';
import Play from './Play';
import { openModal } from '../utils/modals/modalsSlice';
import { showCamera } from '../../api/apiConf';
import { move } from './thunks';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id, sub_stream },
    },
  } = ownProps;
  return {
    src: showCamera(id, sub_stream),
    camera: state.cameras.list.find((cam) => cam.id === parseInt(id)),
    sub_stream: decodeURIComponent(sub_stream),
  };
};
function mapDispatchToProps(dispatch) {
  return {
    killCamera: (id, sub_stream) =>
      dispatch(killCamerasRequest(id, sub_stream)),
    killCamerasRequestWithoutClosing: (id, sub_stream) =>
      dispatch(killCamerasRequestWithoutClosing(id, sub_stream)),
    takePhoto: (id, tag, sub_stream) =>
      dispatch(takePhotoRequest(id, tag, sub_stream)),
    getCameras: () => dispatch(getCamerasRequest()),
    openModal: (modalId) => dispatch(openModal(modalId)),
    move: (id, sub_stream) => (direction) =>
      dispatch(move(id, sub_stream)(direction)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
