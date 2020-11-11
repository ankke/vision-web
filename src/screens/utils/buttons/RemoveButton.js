import PropTypes from 'prop-types';
import React from 'react';
import CircleButton from './CircleButton';
import RemoveIcon from '@material-ui/icons/Remove';

export default function RemoveButton({ onClick, style, label }) {
  return (
    <CircleButton onClick={onClick} style={style} label={label}>
      <RemoveIcon />
    </CircleButton>
  );
}

RemoveButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
