import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CamerasList } from '../cameras/CamerasList';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    padding: '20px 20px',
    marginTop: 154,
    flex: 1,
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
  },
};

class PresetCameras extends Component {
  componentDidMount() {
    this.props.getCamerasForPreset(this.props.presetId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.presetId !== prevProps.presetId) {
      this.props.getCamerasForPreset(this.props.presetId);
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <CamerasList
          cameras={this.props.cameras}
          setCurrent={this.props.setCurrent}
          openModal={this.props.openModal}
        />
      </div>
    );
  }
}

PresetCameras.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCamerasForPreset: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  presetId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresetCameras);
