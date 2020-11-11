import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputRow from '../utils/modals/InputRow';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 84,
    marginLeft: 30,
  }
}));

export function Settings() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <InputRow
        label={'Path to directory'}
        onChange={(value, name) => {
          console.log(value);
        }}
      />
    </div>
  );
}
