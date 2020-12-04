import React, { useState } from 'react';
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
import { palette } from '../../constants/palette';
import InputRow from '../utils/modals/InputRow';
import Label from '../utils/modals/Label';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 3px -3px 5px 0px rgba(17,31,60, .3)',
  },
  buttons: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    padding: 10,
    color: palette.primary.main,
  },
  buttons_2: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: palette.primary.main,
  },
  icon: {
    color: palette.primary.main,
  },
  tag: {
    boxShadow: '0 3px 5px 2px rgba(17,31,60, .3)',
    marginBottom: 10,
  },
}));

export default function Panel({
  camera,
  killCamera,
  takePhoto,
  openModal,
  rotate,
}) {
  const classes = useStyles();
  const [tag, setTag] = useState('');
  const killModalId = CONFIRMATION_MODAL + ' kill';

  return (
    <div className={classes.container}>
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
          <Label label={'Tag:'}>
            <InputRow onChange={setTag} value={tag} name={'Tag'} style={classes.tag}/>
          </Label>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Take a photo"
          >
            <IconButton
              aria-label="rotate_right"
              onClick={() => takePhoto(camera.id, tag)}
            >
              <PhotoCameraIcon className={classes.icon} fontSize={'large'} />
            </IconButton>
          </LightTooltip>
          {camera && camera.ptz_app && (
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Take a panorama"
            >
              <IconButton
                aria-label="pano"
                onClick={() => takePhoto(camera.id)}
              >
                <PanoramaHorizontalIcon
                  className={classes.icon}
                  fontSize={'large'}
                />
              </IconButton>
            </LightTooltip>
          )}
          <div className={classes.rotate}>
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Rotate right"
            >
              <IconButton aria-label="rotate_right" onClick={() => rotate(90)}>
                <RotateRightIcon className={classes.icon} fontSize={'large'} />
              </IconButton>
            </LightTooltip>
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Rotate left"
            >
              <IconButton aria-label="rotate_left" onClick={() => rotate(-90)}>
                <RotateLeftIcon className={classes.icon} fontSize={'large'} />
              </IconButton>
            </LightTooltip>
          </div>
          {camera && camera.ptz_app && <Arrows />}
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

Panel.propTypes = {
  camera: PropTypes.object,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  getCameras: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  rotate: PropTypes.func.isRequired,
};
