import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { palette } from '../../../constants/palette';

export default function CheckboxRow({ name, state, onChange }) {
  return (
    <Checkbox
      checked={state}
      onChange={(event) => onChange(event.target.checked, name)}
      name={name}
      color={palette.primary.main}
    />
  );
}

CheckboxRow.propTypes = {
  state: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
