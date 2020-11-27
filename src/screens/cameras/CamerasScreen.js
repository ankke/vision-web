import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ADD_CAMERA_MODAL, ModalsTranslator } from '../utils/modals/types';
import AddButtonWithTooltip from '../utils/buttons/AddButtonWithTooltip';
import { CamerasList } from './CamerasList';

const styles = {
  container: {
    padding: '20px 20px',
    marginTop: 64,
    flex: 1,
    maxWidth: 500,
  },
  addButton: {
    height: 60,
    width: 60,
    marginBottom: 30,
    marginRight: 30,
  },
};

class CamerasScreen extends Component {
  componentDidMount() {
    this.props.getCameras();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AddButtonWithTooltip
          onClick={() => this.props.openModal(ADD_CAMERA_MODAL)}
          title={'Add camera'}
          label={'Add camera'}
          style={classes.addButton}
        />
        <CamerasList
          cameras={this.props.cameras}
          delete_={this.props.delete}
          setCurrent={this.props.setCurrent}
          openModal={this.props.openModal}
        />
        <ModalsTranslator.ADD_CAMERA_MODAL action={this.props.addCamera} />
        <ModalsTranslator.EDIT_CAMERA_MODAL action={this.props.editCamera} />
      </div>
    );
  }
}

CamerasScreen.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCameras: PropTypes.func.isRequired,
  addCamera: PropTypes.func.isRequired,
  editCamera: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasScreen);
