import React, {useState} from 'react';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    display: 'flex',
    padding: '0px 30px',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  video: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
  },
  videoContainer: {
    width: '80%',
    height: '90%',
    borderColor: colors.MAIN,
    borderRadius: 3,
    border: 10,
    backgroundColor: colors.MAIN,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginRight: 30,
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
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Play({ src, id, killCamera, takePhoto }) {
  const classes = useStyles();
  const [rotation, setRotation] = useState(0);

  const calcRotation = (incr) => {
    return (rotation + incr) % 360;
  };

  const rot = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className={classes.container}>
      <div className={classes.videoContainer} style={rot}>
        <img className={classes.video} src={src} alt={'No feed from camera'} />
      </div>
      <div className={classes.buttons}>
        <button className={classes.killButton} onClick={() => killCamera(id)}>
          Stop camera
        </button>
        <button className={classes.photoButton} onClick={() => takePhoto(id)}>
          Take a photo
        </button>
      </div>
    </div>
  );
}

Play.propTypes = {
  history: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
