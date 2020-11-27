import { connect } from 'react-redux';
import Modal from './PresetModal';
import { closeModal } from '../../utils/modals/modalsSlice';
import { editCurrent, removeCurrent, setCurrent } from '../presetsSlice';

function mapStateToProps(state) {
  return {
    opened: state.modals.open,
    preset: state.presets.current,
    cameras: state.cameras.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (modalId) => dispatch(closeModal(modalId)),
    setCurrent: (preset) => dispatch(setCurrent(preset)),
    removeCurrent: () => dispatch(removeCurrent()),
    editCurrent: (key) => (value) => dispatch(editCurrent({ [key]: value })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
