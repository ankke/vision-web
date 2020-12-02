import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputRow from '../utils/modals/InputRow';
import Label from '../utils/modals/Label';
import { palette } from '../../constants/palette';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 84,
    marginLeft: 30,
    backgroundImage: "url('/spejs_logo.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ' right bottom',
    flex: 1,
  },
  title: {
    heigth: 60,
    fontSize: 30,
    marginBottom: 15,
    color: palette.secondary.main,
  },
}));

export function Settings() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>Settings</div>
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
