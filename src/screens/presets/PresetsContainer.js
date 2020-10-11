import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Presets from './Presets';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Presets)
);
