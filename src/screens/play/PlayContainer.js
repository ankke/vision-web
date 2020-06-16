import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { killCamerasRequest, takePhotoRequest } from '../thunks';
import { showCamera } from '../../api/apiConf';
import Play from './Play';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    id: id,
    src: showCamera(id),
  };
};
function mapDispatchToProps(dispatch) {
  return {
    killCamera: (id) => dispatch(killCamerasRequest(id)),
    takePhoto: (id) => dispatch(takePhotoRequest(id)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
