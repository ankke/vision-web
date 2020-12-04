import PropTypes from 'prop-types';
import React from 'react';
import Add from '@material-ui/icons/Add';
import CircleButton from './CircleButton';

export default function AddButton({ onClick, style, label }) {
  return (
    <CircleButton onClick={onClick} style={style} label={label}>
      <Add />
    </CircleButton>
  );
}

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
