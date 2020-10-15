import { connect } from 'react-redux';
import { addCameraRequest } from '../../thunks';
import Modal from './AddCameraModal';
import { closeModal } from '../listSlice';

function mapStateToProps(state) {
  return {
    isOpen: state.list.modalOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCamera: (camera) => dispatch(addCameraRequest({ camera })),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
