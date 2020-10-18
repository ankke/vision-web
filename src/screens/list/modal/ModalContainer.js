import { connect } from 'react-redux';
import { addCameraRequest } from '../../thunks';
import Modal from './CameraModal';
import { closeModal } from '../listSlice';

function mapStateToProps(state) {
  return {
    isOpen: state.list.modalOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
