import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Fade } from '@material-ui/core';
import ModalContainer from './ModalContainer';
import colors from '../../constants/colors'

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
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  row: {
    flexGrow: 1,
    flexBasis: 550,
    maxWidth: 550,
    display: 'flex',
    justifyContent: 'space-between',
    background: `linear-gradient(45deg, ${colors.MAIN} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 10,
    marginRight: 30,
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: 'white',
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

  renderRow(camera, classes, key) {
    return (
      <div className={classes.row} key={key}>
        <div className={classes.name}>{camera.name}</div>
        <div className={classes.buttons}>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Play"
          >
            <a
              href={'http://127.0.0.1:3000/play/' + camera.id}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <IconButton className={classes.button} aria-label="play">
                <PlayArrowIcon />
              </IconButton>
            </a>
          </LightTooltip>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Edit"
          >
            <IconButton
              className={classes.button}
              aria-label="play"
              onClick={() => console.log('edit')}
            >
              <EditIcon />
            </IconButton>
          </LightTooltip>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Delete"
          >
            <IconButton
              className={classes.button}
              aria-label="play"
              onClick={() => {
                console.log(camera);
                this.props.delete(camera.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </LightTooltip>
        </div>
      </div>
    );
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
        <div className={classes.root}>
          {this.props.cameras.map((camera, index) =>
            this.renderRow(camera, classes, index)
          )}
          <ModalContainer />
        </div>
      </div>
    );
  }
}

CamerasList.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCameras: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasList);
