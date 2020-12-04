import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import WithTooltip from './WithTooltip';

export default function EditButtonWithTooltip({ onClick, style }) {
  return (
    <WithTooltip title="Edit">
      <IconButton className={style} aria-label="edit" onClick={onClick}>
        <EditIcon />
      </IconButton>
    </WithTooltip>
  );
}

EditButtonWithTooltip.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
