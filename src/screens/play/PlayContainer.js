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
import { streamCamera } from '../../api/apiConf';
import {move, startRecording, stopRecording, takePanoPhotoRequest} from './thunks';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id, sub_stream },
    },
  } = ownProps;
  return {
    src: streamCamera(id, sub_stream),
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
    move: (id, sub_stream) => (direction, rotValue) =>
      dispatch(move(id, sub_stream)(direction, rotValue)),
    takePanoPhoto: (id, tag, sub_stream, rotValue) =>
      dispatch(takePanoPhotoRequest(id, tag, sub_stream, rotValue)),
    startRecording: (id, tag, sub_stream) =>
      dispatch(startRecording(id, tag, sub_stream)),
    stopRecording: (id, sub_stream) => dispatch(stopRecording(id, sub_stream)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
