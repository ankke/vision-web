import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LightTooltip from '../utils/LightTooltip';
import { palette } from '../../constants/palette';
import PropTypes from 'prop-types';
import Play from './Play';
import {DOWN, LEFT, RIGHT, UP} from "./thunks";

const useStyles = makeStyles((theme) => ({
  arrows: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    height: 100,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  double_row: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  icon: {
    color: palette.primary.main,
  },
}));

export default function Arrows({ move }) {
  const classes = useStyles();
  return (
    <div className={classes.arrows}>
      <div>
        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Up"
        >
          <IconButton
            style={{ padding: 'unset' }}
            aria-label="up"
            onClick={() => move(UP)}
          >
            <ExpandLessIcon className={classes.icon} fontSize={'large'} />
          </IconButton>
        </LightTooltip>
      </div>
      <div className={classes.double_row}>
        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Left"
        >
          <IconButton
            style={{ padding: 'unset' }}
            aria-label="left"
            onClick={() => move(LEFT)}
          >
            <NavigateBeforeIcon className={classes.icon} fontSize={'large'} />
          </IconButton>
        </LightTooltip>
        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Right"
        >
          <IconButton
            style={{ padding: 'unset' }}
            aria-label="right"
            onClick={() => move(RIGHT)}
          >
            <NavigateNextIcon className={classes.icon} fontSize={'large'} />
          </IconButton>
        </LightTooltip>
      </div>
      <div>
        <LightTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Down"
        >
          <IconButton
            style={{ padding: 'unset' }}
            aria-label="down"
            onClick={() => move(DOWN)}
          >
            <ExpandMoreIcon className={classes.icon} fontSize={'large'} />
          </IconButton>
        </LightTooltip>
      </div>
    </div>
  );
}

Arrows.propTypes = {
  move: PropTypes.func.isRequired,
};
