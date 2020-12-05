import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoRow from '../utils/InfoRow';
import WithTooltip from '../utils/buttons/WithTooltip';
import EditButtonWithTooltip from '../utils/buttons/EditButtonWithTooltip';
import DeleteButtonWithTooltip from '../utils/buttons/DeleteButtonWithTooltip';
import {
  CONFIRMATION_MODAL,
  EDIT_CAMERA_MODAL,
  ModalsTranslator,
} from '../utils/modals/types';
import { ExpandableRow } from '../utils/ExpandableRow';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  row: {
    padding: 5,
    flex: 1,
  },
  button: {
    color: 'white',
  },
}));

export function CameraRow({
  camera,
  delete_,
  openModal,
  setCurrent,
  withoutButtons = false,
}) {
  const classes = useStyles();
  const history = useHistory();
  const delModalId = CONFIRMATION_MODAL + 'camera' + camera.id;
  const renderButtons = () => {
    if (withoutButtons) {
      return null;
    }
    return (
      <div>
        <WithTooltip title={'Play camera'}>
          <a
            href={
              'http://127.0.0.1:3000/play/' +
              camera.id +
              '/' +
              encodeURIComponent(camera.sub_streams[0])
            }
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
            history.push(`/cameras/${camera.id}/edit`);
          }}
          style={classes.button}
        />
        {delete_ && (
          <DeleteButtonWithTooltip
            onClick={() => {
              openModal(delModalId);
            }}
            style={classes.button}
          />
        )}
        <ModalsTranslator.CONFIRMATION_MODAL
          action={() => delete_(camera.id)}
          modalId={delModalId}
          text={`Are you sure you want to delete camera ${camera.name}?`}
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
    <div className={classes.row}>
      <ExpandableRow
        name={camera.name}
        buttons={renderButtons}
        info={renderInfoRows}
      />
    </div>
  );
}

CameraRow.propTypes = {
  camera: PropTypes.object.isRequired,
  delete_: PropTypes.func,
  openModal: PropTypes.func,
  setCurrent: PropTypes.func,
  withoutButtons: PropTypes.bool,
};
