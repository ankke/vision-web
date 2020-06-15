import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Example from './Example';
import { getCamerasRequest } from './thunks';

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getCamerasRequest()),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Example));
