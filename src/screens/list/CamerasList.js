import React, { Component } from 'react';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Fade } from '@material-ui/core';
import ModalContainer from './modal/ModalContainer';
import colors from '../../constants/colors';
import { CameraRow } from './CameraRow';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const styles = {
  container: {
    padding: '20px 20px',
    marginTop: 64,
    flex: 1,
    maxWidth: 500,
  },
  addButton: {
    outline: 'none',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: '50%',
    border: 2,
    color: colors.MAIN,
    height: 60,
    width: 60,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 30,
    marginRight: 30,
  },
};

class CamerasList extends Component {
  componentDidMount() {
    this.props.getCameras();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Add new camera"
          placement="right"
        >
          <IconButton
            className={classes.addButton}
            aria-label="add"
            onClick={() => this.props.openModal()}
          >
            <Add />
          </IconButton>
        </LightTooltip>
        {this.props.cameras.map((camera, index) => (
          <CameraRow
            camera={camera}
            key={index}
            _delete={this.props.delete}
            editCamera={this.props.editCamera}
            openModal={this.props.openModal}
          />
        ))}
        <ModalContainer action={this.props.addCamera}/>
      </div>
    );
  }
}

CamerasList.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCameras: PropTypes.func.isRequired,
  addCamera: PropTypes.func.isRequired,
  editCamera: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasList);
