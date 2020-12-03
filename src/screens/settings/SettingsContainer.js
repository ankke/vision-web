import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Settings } from './Settings';
import { editSettingsRequest, getSettingsRequest } from './thunks';

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSettingsRequest: (settings) =>
      dispatch(editSettingsRequest({ settings })),
    getSettingsRequest: () => dispatch(getSettingsRequest()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Settings)
);
