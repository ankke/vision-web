import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeErrorModal, openErrorModal } from 'shipment/actions';
import CamerasList from './CamerasList';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    openErrorModal: (message) => dispatch(openErrorModal(message)),
    closeErrorModal: (message) => dispatch(closeErrorModal(message)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamerasList)
);
