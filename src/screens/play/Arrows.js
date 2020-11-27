import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Fade } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LightTooltip from '../utils/LightTooltip';

const useStyles = makeStyles((theme) => ({
  arrows: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: '15px',
  },
  double_row: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

export default function Arrows() {
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
            onClick={() => console.log('up')}
          >
            <ExpandLessIcon fontSize={'large'} />
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
            onClick={() => console.log('left')}
          >
            <NavigateBeforeIcon fontSize={'large'} />
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
            onClick={() => console.log('right')}
          >
            <NavigateNextIcon fontSize={'large'} />
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
            onClick={() => console.log('down')}
          >
            <ExpandMoreIcon fontSize={'large'} />
          </IconButton>
        </LightTooltip>
      </div>
    </div>
  );
}
