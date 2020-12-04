import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WithTooltip from './WithTooltip';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteButtonWithTooltip({ onClick, style }) {
  return (
    <WithTooltip title="Delete">
      <IconButton className={style} aria-label="delete" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </WithTooltip>
  );
}

DeleteButtonWithTooltip.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
