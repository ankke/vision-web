import { connect } from 'react-redux';
import Modal from './CameraModal';
import { closeModal } from './modalsSlice';
import { setCurrent } from '../../camerasSlice';

function mapStateToProps(state) {
  return {
    opened: state.modals.open,
    camera: state.cameras.current,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (modalId) => dispatch(closeModal(modalId)),
    setCurrent: (camera) => dispatch(setCurrent(camera)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
