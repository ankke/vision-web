import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '../../../constants/palette';
const classNames = require('classnames');

const useStyles = makeStyles(() => ({
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: palette.primary.main,
    fontSize: 16,
    textAlign: 'center',
  },
}));

export default function Label({ label, style, children }) {
  const classes = useStyles();
  return (
    <div className={classNames(style, classes.label)}>
      {label}
      {children}
    </div>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.object,
  style: PropTypes.string,
};
