import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCamerasRequest,
  killCamerasRequest,
  takePhotoRequest,
} from '../cameras/thunks';
import { showCamera } from '../../api/apiConf';
import Play from './Play';
import { openModal } from '../utils/modals/modalsSlice';

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
    openModal: (modalId) => dispatch(openModal(modalId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
