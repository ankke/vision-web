import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ADD_CAMERA_MODAL } from '../utils/modals/types';
import AddButtonWithTooltip from '../utils/buttons/AddButtonWithTooltip';
import { CamerasList } from './CamerasList';
import { palette } from '../../constants/palette';
import { Route } from 'react-router';
import { routes } from '../../constants/routes';
import { AddCameraModal, EditCameraModal } from './modals/CameraModalContainer';

const styles = {
  container: {
    padding: '20px 20px',
    marginTop: 64,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: "url('/spejs_logo.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ' right bottom',
  },
  list: {
    flex: 1,
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    height: 50,
    width: 50,
    marginBottom: 30,
    marginRight: 30,
    marginLeft: 5,
  },
  title: {
    heigth: 60,
    fontSize: 30,
    marginBottom: 15,
    color: palette.secondary.main,
    marginLeft: 10,
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
        <div className={classes.list}>
          <div className={classes.title}>Cameras</div>
          <AddButtonWithTooltip
            onClick={() => this.props.history.push(routes.camerasListAdd)}
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
        </div>
        <Route
          exact
          path={routes.camerasListEdit}
          component={EditCameraModal}
        />
        <Route exact path={routes.camerasListAdd} component={AddCameraModal} />
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
  removeCurrent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasScreen);
