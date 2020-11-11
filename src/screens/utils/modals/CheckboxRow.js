import PropTypes from 'prop-types';
import React from 'react';
import colors from '../../../constants/colors.json';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxRow({ name, state, onChange }) {
  return (
    <Checkbox
      checked={state}
      onChange={(event) => onChange(event.target.checked, name)}
      name={name}
      color={colors.MAIN}
    />
  );
}

CheckboxRow.propTypes = {
  state: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
