import { connect } from 'react-redux';
import DeleteConfirmationModal from './ConfirmationModal';
import { closeModal } from './modalsSlice';

function mapStateToProps(state, ownProps) {
  return {
    opened: state.modals.open,
    ...ownProps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (modalId) => dispatch(closeModal(modalId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteConfirmationModal);
