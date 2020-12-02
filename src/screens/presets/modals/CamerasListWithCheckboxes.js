import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CameraRow } from '../../cameras/CameraRow';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '../../../constants/palette';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: '5px 0px',
    flex: 1,
  },
}));

export function CamerasListWithCheckboxes({ cameras, onChange, camerasList }) {
  const classes = useStyles();
  useEffect(() => {
    setState(cameras);
  }, [cameras]);

  const [state, setState] = useState(cameras);

  const removeElement = (id) => {
    const newState = state.filter((i) => i !== id);
    onChange(newState);
  };

  const addElement = (id) => {
    const newState = state.concat(id);
    onChange(newState);
  };

  return (
    <div>
      {camerasList.map((camera, index) => (
        <div key={index} className={classes.row}>
          <Checkbox
            checked={state.includes(camera.id)}
            onChange={(event) => {
              if (event.target.checked) {
                addElement(camera.id);
              } else {
                removeElement(camera.id);
              }
            }}
            color={palette.primary.main}
          />
          <CameraRow camera={camera} key={index} withoutButtons />
        </div>
      ))}
    </div>
  );
}

CamerasListWithCheckboxes.propTypes = {
  cameras: PropTypes.array.isRequired,
  camerasList: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
