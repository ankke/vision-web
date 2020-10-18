import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    minWidth: 120,
  },
  multiple: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    marginRight: 15,
  },
}));

export default function InfoRow({ name, value }) {
  const classes = useStyles();

  const render_value = (value) => {
    console.log(value);
    console.log(typeof value == 'string');
    console.log('-----');

    if (Array.isArray(value)) {
      const rows = value.map((val) => (
        <div key={val} className={classes.item}>
          {val}
        </div>
      ));
      return <div className={classes.multiple}>{rows}</div>;
    } else if (typeof value == 'boolean') {
      if (value) {
        return <CheckIcon />;
      } else {
        return <ClearIcon />;
      }
    } else {
      return <div>{value}</div>;
    }
  };

  return (
    <div className={classes.row}>
      <div className={classes.name}>{name}</div>
      {render_value(value)}
    </div>
  );
}

InfoRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
