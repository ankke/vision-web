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
    src: showCamera(id),
  };
};
function mapDispatchToProps(dispatch) {
  return {
    killCamera: () => dispatch(killCamerasRequest()),
    takePhoto: (id) => dispatch(takePhotoRequest(id)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
