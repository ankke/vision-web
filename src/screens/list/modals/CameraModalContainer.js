import { connect } from 'react-redux';
import Modal from './CameraModal';
import { closeModal } from '../../utils/modals/modalsSlice';
import { editCurrent, removeCurrent } from '../../camerasSlice';

function mapStateToProps(state) {
  return {
    opened: state.modals.open,
    camera: state.cameras.current,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (modalId) => dispatch(closeModal(modalId)),
    removeCurrent: () => dispatch(removeCurrent()),
    editCurrent: (key) => (value) => dispatch(editCurrent({ [key]: value })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
