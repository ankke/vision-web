import { connect } from 'react-redux';
import { PresetRow } from './PresetRow';
import { addPresetRequest } from './thunks';

function mapStateToProps(state) {
  return {
    presetDetails: state.presets.details.preset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPreset: (preset) => dispatch(addPresetRequest({ preset })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresetRow);
