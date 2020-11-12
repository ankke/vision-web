import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoRow from '../utils/InfoRow';
import WithTooltip from '../utils/buttons/WithTooltip';
import EditButtonWithTooltip from '../utils/buttons/EditButtonWithTooltip';
import DeleteButtonWithTooltip from '../utils/buttons/DeleteButtonWithTooltip';
import { EDIT_CAMERA_MODAL } from '../utils/modals/types';
import { ExpandableRow } from '../utils/ExpandableRow';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white',
  },
}));

export function CameraRow({ camera, delete_, openModal, setCurrent }) {
  const classes = useStyles();
  const renderButtons = () => {
    return (
      <div>
        <WithTooltip title={'Play camera'}>
          <a
            href={'http://127.0.0.1:3000/play/' + camera.id}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <IconButton className={classes.button} aria-label="play">
              <PlayArrowIcon />
            </IconButton>
          </a>
        </WithTooltip>
        <EditButtonWithTooltip
          onClick={() => {
            setCurrent(camera);
            openModal(EDIT_CAMERA_MODAL);
          }}
          style={classes.button}
        />
        <DeleteButtonWithTooltip
          onClick={() => {
            delete_(camera.id);
          }}
          style={classes.button}
        />
      </div>
    );
  };

  const renderInfoRows = () => {
    return (
      <div>
        <InfoRow name={'Url:'} value={camera.url} />
        <InfoRow name={'Sub streams:'} value={camera.sub_streams} />
        <InfoRow name={'Suffix:'} value={camera.suffix} />
        <InfoRow name={'Ptz app:'} value={camera.ptz_app} />
        <InfoRow name={'Udp:'} value={camera.udp_supported} />
      </div>
    );
  };

  return (
    <ExpandableRow
      name={camera.name}
      buttons={renderButtons}
      info={renderInfoRows}
    />
  );
}

CameraRow.propTypes = {
  camera: PropTypes.object.isRequired,
  delete_: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
