import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StopIcon from '@material-ui/icons/Stop';
import PanoramaHorizontalIcon from '@material-ui/icons/PanoramaHorizontal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Fade } from '@material-ui/core';
import LightTooltip from '../utils/LightTooltip';
import Arrows from './Arrows';
import { CONFIRMATION_MODAL, ModalsTranslator } from '../utils/modals/types';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    display: 'flex',
    padding: '30px 30px',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  video: {
    borderRadius: 3,
    backgroundColor: '#00000',
  },
  videoContainer: {
    flex: 1,
    // maxHeight: '96vh',
    borderRadius: 3,
    border: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    // boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  buttons: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
    height: '50%',
  },
  buttons_2: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  rotate: {
    display: 'flex',
    flexDirection: 'row',
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

  const killModalId = CONFIRMATION_MODAL + ' kill';

  return (
    <div className={classes.container}>
      <div id="videoContainer" className={classes.videoContainer}>
        <img
          className={classes.video}
          style={rot}
          src={src}
          alt={'No feed from camera'}
        />
      </div>
      <div className={classes.buttons}>
        <div className={classes.buttons_2}>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Stop the video stream"
          >
            <IconButton
              aria-label="stop"
              onClick={() => openModal(killModalId)}
            >
              <StopIcon color={'error'} fontSize={'large'} />
            </IconButton>
          </LightTooltip>
        </div>
        <div className={classes.buttons_2}>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Take a photo"
          >
            <IconButton
              aria-label="rotate_right"
              onClick={() => takePhoto(camera.id)}
            >
              <PhotoCameraIcon fontSize={'large'} />
            </IconButton>
          </LightTooltip>
          {camera && camera.udp_supported && (
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Take a panorama"
            >
              <IconButton
                aria-label="pano"
                onClick={() => takePhoto(camera.id)}
              >
                <PanoramaHorizontalIcon fontSize={'large'} />
              </IconButton>
            </LightTooltip>
          )}
          <div className={classes.rotate}>
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Rotate right"
            >
              <IconButton
                aria-label="rotate_right"
                onClick={() => {
                  setRotation(calcRotation(90));
                  setSize(calcSize());
                }}
              >
                <RotateRightIcon fontSize={'large'} />
              </IconButton>
            </LightTooltip>
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Rotate left"
            >
              <IconButton
                aria-label="rotate_left"
                onClick={() => {
                  setRotation(calcRotation(-90));
                  setSize(calcSize());
                }}
              >
                <RotateLeftIcon fontSize={'large'} />
              </IconButton>
            </LightTooltip>
          </div>
          <Arrows />
        </div>
        <ModalsTranslator.CONFIRMATION_MODAL
          action={() => killCamera(camera.id)}
          modalId={killModalId}
          text={`Are you sure you want to finish streaming?`}
        />
      </div>
    </div>
  );
}

Play.propTypes = {
  history: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  camera: PropTypes.object.isRequired,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  getCameras: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
