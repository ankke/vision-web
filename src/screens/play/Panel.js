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
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 3px -3px 5px 0px rgba(17,31,60, .3)',
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttons: {
    justifyContent: 'space-evenly',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: palette.primary.main,
    flex: 1,
  },
  icon: {
    color: palette.primary.main,
  },
  tag: {
    boxShadow: '0 3px 5px 2px rgba(17,31,60, .3)',
    marginBottom: 20,
  },
  subStreams: {
    borderColor: palette.primary.main,
    borderRadius: 3,
    border: 2,
    color: palette.primary.main,
    height: 30,
    boxShadow: '0 3px 5px 2px rgba(17,31,60, .3)',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "'Bai Jamjuree', sans-serif",
    width: '100%',
    outline: 'none',
  },
  text: {
    fontFamily: "'Bai Jamjuree', sans-serif",
    width: '100%',
  },
}));

export default function Panel({
  camera,
  killCamera,
  killCamerasRequestWithoutClosing,
  takePhoto,
  openModal,
  rotate,
  calcZoom,
  zoom,
  sub_stream,
}) {
  console.log(sub_stream);
  const classes = useStyles();
  const history = useHistory();
  const [tag, setTag] = useState('');
  const killModalId = CONFIRMATION_MODAL + ' kill';
  const [subStream, setSubStream] = useState(sub_stream);

  const handleChange = (event) => {
    killCamerasRequestWithoutClosing(camera.id, sub_stream);
    const subStream = event.target.value;
    setSubStream(subStream);
    history.push(
      '/play' + '/' + camera.id + '/' + encodeURIComponent(subStream)
    );
  };

  return (
    <div className={classes.container}>
      <LightTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Stop the video stream"
      >
        <IconButton aria-label="stop" onClick={() => openModal(killModalId)}>
          <StopIcon color={'error'} fontSize={'large'} />
        </IconButton>
      </LightTooltip>
      <div className={classes.buttons}>
        {camera && camera.sub_streams.length > 0 && (
          <FormControl variant="outlined" className={classes.text}>
            Sub stream:
            <Select
              labelId="sub-stream"
              id="sub-stream"
              value={subStream}
              onChange={handleChange}
              className={classes.subStreams}
            >
              {camera &&
                camera.sub_streams.map((sub_stream, index) => {
                  return (
                    <MenuItem key={index} value={sub_stream}>
                      {sub_stream}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        )}
        <Label label={'Tag:'}>
          <InputRow
            onChange={setTag}
            value={tag}
            name={'Tag'}
            style={classes.tag}
          />
        </Label>
        <Grid container spacing={2}>
          <Grid item>
            <ZoomOutIcon className={classes.icon} />
          </Grid>
          <Grid item xs>
            <Slider
              value={zoom}
              onChange={calcZoom}
              aria-labelledby="continuous-slider"
              className={classes.icon}
            />
          </Grid>
          <Grid item>
            <ZoomInIcon className={classes.icon} />
          </Grid>
        </Grid>

        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Take a photo"
        >
          <IconButton
            aria-label="rotate_right"
            onClick={() => takePhoto(camera.id, tag, sub_stream)}
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
            <IconButton aria-label="pano" onClick={() => takePhoto(camera.id)}>
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
        action={() => killCamera(camera.id, sub_stream)}
        modalId={killModalId}
        text={`Are you sure you want to finish streaming?`}
      />
    </div>
  );
}

Panel.propTypes = {
  camera: PropTypes.object,
  killCamera: PropTypes.func.isRequired,
  killCamerasRequestWithoutClosing: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  getCameras: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  rotate: PropTypes.func.isRequired,
  calcZoom: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  sub_stream: PropTypes.string.isRequired,
};
