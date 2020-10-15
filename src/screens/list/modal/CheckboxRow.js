import PropTypes from 'prop-types';
import React from 'react';
import colors from '../../../constants/colors.json';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxRow({ label, name, state, onChange }) {
  return (
    <label>
      <Checkbox
        checked={state}
        onChange={onChange}
        name={name}
        color={colors.MAIN}
      />
      {label}
    </label>
  );
}

CheckboxRow.propTypes = {
  label: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
