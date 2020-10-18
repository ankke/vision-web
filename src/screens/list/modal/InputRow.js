import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../constants/colors.json';

const useStyles = makeStyles((theme) => ({
  item: {
    outline: 'none',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: 3,
    border: 2,
    color: colors.MAIN,
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
    width: 400,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export default function InputRow({ label, name, onChange }) {
  const classes = useStyles();

  return (
    <label className={classes.label}>
      {label}
      <input
        className={classes.item}
        type={'text'}
        name={'name'}
        onChange={(event) => onChange(event.target.value, name)}
      />
    </label>
  );
}

InputRow.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
