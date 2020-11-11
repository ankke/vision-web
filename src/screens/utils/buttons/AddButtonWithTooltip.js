import PropTypes from 'prop-types';
import React from 'react';
import AddButton from './AddButton';
import WithTooltip from './WithTooltip';

export default function AddButtonWithTooltip({ onClick, style }) {
  return (
    <WithTooltip title="Add">
      <AddButton onClick={onClick} label="add" style={style} />
    </WithTooltip>
  );
}

AddButtonWithTooltip.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
