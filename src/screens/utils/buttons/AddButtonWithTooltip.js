import PropTypes from 'prop-types';
import React from 'react';
import AddButton from './AddButton';
import WithTooltip from './WithTooltip';

export default function AddButtonWithTooltip({ title, onClick, style }) {
  return (
    <WithTooltip title={title ? title : 'Add'}>
      <AddButton onClick={onClick} label="add" style={style} />
    </WithTooltip>
  );
}

AddButtonWithTooltip.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
