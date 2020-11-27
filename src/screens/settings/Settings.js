import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputRow from '../utils/modals/InputRow';
import Label from '../utils/modals/Label';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 84,
    marginLeft: 30,
  },
}));

export function Settings() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Label label={'Path to directory: '}>
        <InputRow
          onChange={(value, name) => {
            console.log(value);
          }}
        />
      </Label>
    </div>
  );
}
