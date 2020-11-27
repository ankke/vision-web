import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Settings} from "./Settings";

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Settings)
);
