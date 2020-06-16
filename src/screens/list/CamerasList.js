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
    background: 'linear-gradient(45deg, #6d597a 50%, #963D5A 100%)',
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
    borderColor: '#6d597a',
    borderRadius: '50%',
    border: 2,
    color: '#6d597a',
    height: 60,
    width: 60,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 30,
    marginRight: 30,
  },
};

class CamerasList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCameras();
  }

  renderRow(camera, classes) {
    return (
      <div className={classes.row}>
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
              rel="noreferrer"
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
          {this.props.cameras.map((camera) => this.renderRow(camera, classes))}
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
  play: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CamerasList);
