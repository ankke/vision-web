import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../constants/colors.json';
import IconButton from '@material-ui/core/IconButton';
const classNames = require('classnames');

const useStyles = makeStyles(() => ({
  circleButton: {
    outline: 'none',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: '50%',
    border: 2,
    color: colors.MAIN,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
}));

export default function CircleButton({ children, style, label, onClick }) {
  const classes = useStyles();

  return (
    <IconButton
      className={classNames(classes.circleButton, style)}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
}

CircleButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
