import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../constants/palette';
import Panel from './Panel';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  videoContainer: {
    flex: 1,
    borderRadius: 3,
    border: 10,
    display: 'flex',
    padding: 3,
    justifyContent: 'center',
  },
  rotate: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: palette.primary.main,
    fontSize: 30,
    fontFamily: "'Bai Jamjuree', sans-serif",
  },
  shadow: {
    minHeight: 'unset',
    boxShadow: '0 3px 5px 2px rgba(17,31,60, .3)',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
}));

export default function Play({
  src,
  camera,
  killCamera,
  takePhoto,
  getCameras,
  openModal,
}) {
  const classes = useStyles();
  useEffect(() => {
    getCameras();
  }, []);
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const calcRotation = (incr) => {
    return (rotation + incr) % 360;
  };

  const calcSize = () => {
    return (rotation / 90) % 2 === 0
      ? {
          maxWidth: document.getElementById('videoContainer').clientHeight - 6,
          maxHeight: document.getElementById('videoContainer').clientWidth - 6,
        }
      : {
          maxWidth: document.getElementById('videoContainer').clientWidth - 6,
          maxHeight: document.getElementById('videoContainer').clientHeight - 6,
        };
  };

  const rot = {
    transform: `rotate(${rotation}deg)`,
    ...size,
  };

  const cameraName = camera ? camera.name : 'Camera';

  const rotate = (rotation) => {
    setRotation(calcRotation(rotation));
    setSize(calcSize());
  };

  return (
    <div className={classes.container}>
      <Toolbar className={classes.shadow}>
        <Typography noWrap className={classes.title}>
          {cameraName}
        </Typography>
      </Toolbar>
      <div className={classes.content}>
        <div id="videoContainer" className={classes.videoContainer}>
          <img style={rot} src={src} alt={'No feed from camera'} />
        </div>
        <Panel
          killCamera={killCamera}
          takePhoto={takePhoto}
          openModal={openModal}
          camera={camera}
          rotate={rotate}
        />
      </div>
    </div>
  );
}

Play.propTypes = {
  history: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  camera: PropTypes.object,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  getCameras: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
