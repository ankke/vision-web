import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import colors from '../../constants/colors';

const styles = {
  container: {
    flex: 1,
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  video: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
  },
  videoContainer: {
    width: 1300,
    height: 900,
    borderColor: colors.MAIN,
    borderRadius: 3,
    border: 10,
    backgroundColor: colors.MAIN,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  killButton: {
    outline: 'none',
    background: `linear-gradient(45deg, ${colors.KILL} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  photoButton: {
    outline: 'none',
    background: `linear-gradient(45deg, ${colors.PHOTO} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 30,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

class Play extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.videoContainer}>
          <img className={classes.video} src={this.props.src} alt={'video'} />
        </div>
        <div className={classes.buttons}>
          <button
            className={classes.killButton}
            onClick={() => {
              this.props.killCamera(this.props.id);
            }}
          >
            Stop camera
          </button>
          <button
            className={classes.photoButton}
            onClick={() => {
              this.props.takePhoto(this.props.id);
            }}
          >
            Take a photo
          </button>
        </div>
      </div>
    );
  }
}

Play.propTypes = {
  history: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Play);
