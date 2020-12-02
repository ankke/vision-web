import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '../../../constants/palette';
const classNames = require('classnames');

const useStyles = makeStyles(() => ({
  item: {
    outline: 'none',
    background: 'white',
    borderColor: palette.primary.main,
    borderRadius: 3,
    border: 2,
    color: palette.primary.main,
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    display: 'flex',
    alignSelf: 'stretch',
  },
}));

export default function InputRow({ name, onChange, value, style }) {
  const classes = useStyles();

  return (
    <input
      className={classNames(classes.item, style)}
      type={'text'}
      value={value}
      onChange={(event) => onChange(event.target.value, name)}
    />
  );
}

InputRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.string,
};
