import { connect } from 'react-redux';
import { PresetRow } from './PresetRow';

function mapStateToProps(state) {
  return {
    presetDetails: state.presets.details.preset,
  };
}

export default connect(mapStateToProps, null)(PresetRow);
