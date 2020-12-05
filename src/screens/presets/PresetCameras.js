import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CamerasList } from '../cameras/CamerasList';
import { withStyles } from '@material-ui/core/styles';
import { palette } from '../../constants/palette';

const styles = {
  container: {
    padding: '20px 20px',
    marginTop: 142,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    heigth: 60,
    fontSize: 30,
    marginBottom: 15,
    color: palette.secondary.main,
    marginLeft: 10,
  },
  info: {
    heigth: 60,
    fontSize: 20,
    marginBottom: 15,
    color: palette.secondary.light,
    marginLeft: 10,
  },
  list: {
    maxWidth: 700,
  },
};

class PresetCameras extends Component {
  componentDidMount() {
    this.props.getCamerasForPreset(this.props.presetId);
    this.props.getPreset(this.props.presetId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.presetId !== prevProps.presetId) {
      this.props.getCamerasForPreset(this.props.presetId);
      this.props.getPreset(this.props.presetId);
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          Cameras in set {this.props.preset.name}
        </div>
        {this.props.cameras.length === 0 && (
          <div className={classes.info}>
            No cameras. Edit set to add cameras.
          </div>
        )}
        <div className={classes.list}>
          <CamerasList
            cameras={this.props.cameras}
            setCurrent={this.props.setCurrent}
            openModal={this.props.openModal}
          />
        </div>
      </div>
    );
  }
}

PresetCameras.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCamerasForPreset: PropTypes.func.isRequired,
  getPreset: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  presetId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  preset: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresetCameras);
