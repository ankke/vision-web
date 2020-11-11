import React, { Component } from 'react';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Fade } from '@material-ui/core';
import colors from '../../constants/colors';
import { CameraRow } from './CameraRow';
import { ADD_MODAL, ModalsTranslator } from '../utils/modals/types';
import LightTooltip from '../utils/LightTooltip';
import AddButton from '../utils/buttons/AddButton';
import AddButtonWithTooltip from '../utils/buttons/AddButtonWithTooltip';

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

class CamerasList extends Component {
  componentDidMount() {
    this.props.getCameras();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AddButtonWithTooltip
          onClick={() => this.props.openModal(ADD_MODAL)}
          label={'Add camera'}
          style={classes.addButton}
        />
        {this.props.cameras.map((camera, index) => (
          <CameraRow
            camera={camera}
            key={index}
            _delete={this.props.delete}
            setCurrent={this.props.setCurrent}
            openModal={this.props.openModal}
          />
        ))}
        <ModalsTranslator.ADD_MODAL action={this.props.addCamera} />
        <ModalsTranslator.EDIT_MODAL action={this.props.editCamera} />
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
  setCurrent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasList);
