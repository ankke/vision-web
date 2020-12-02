import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InfoRow from '../utils/InfoRow';
import {
  CONFIRMATION_MODAL,
  EDIT_PRESET_MODAL,
  ModalsTranslator,
} from '../utils/modals/types';
import EditButtonWithTooltip from '../utils/buttons/EditButtonWithTooltip';
import DeleteButtonWithTooltip from '../utils/buttons/DeleteButtonWithTooltip';
import { ExpandableRow } from '../utils/ExpandableRow';
import { useHistory } from 'react-router';
import MoreButton from '../utils/MoreButton';
import { palette } from '../../constants/palette';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  moreButton: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  button: {
    color: 'white',
  },
}));

export function PresetRow({ preset, delete_, openModal, setCurrent }) {
  const classes = useStyles();
  const history = useHistory();
  const delModalId = CONFIRMATION_MODAL + 'preset' + preset.id;

  const renderButtons = () => {
    return (
      <div>
        <EditButtonWithTooltip
          onClick={() => {
            setCurrent(preset);
            openModal(EDIT_PRESET_MODAL);
          }}
          style={classes.button}
        />
        <DeleteButtonWithTooltip
          onClick={() => {
            openModal(delModalId);
          }}
          style={classes.button}
        />
      </div>
    );
  };

  const renderInfoRows = () => {
    return (
      <div>
        <InfoRow name={'Subnet:'} value={preset.subnet} />
        <InfoRow name={'Cameras:'} value={preset.cameras} />
      </div>
    );
  };

  return (
    <div className={classes.row}>
      <ExpandableRow
        name={preset.name}
        buttons={renderButtons}
        info={renderInfoRows}
      />
      <MoreButton
        style={classes.moreButton}
        onClick={() => history.push(`/presets/${preset.id}/cameras`)}
      />
      <ModalsTranslator.CONFIRMATION_MODAL
        action={() => delete_(preset.id)}
        modalId={delModalId}
        text={`Are you sure you want to delete cameras set ${preset.name}?`}
      />
    </div>
  );
}

PresetRow.propTypes = {
  preset: PropTypes.object.isRequired,
  delete_: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
