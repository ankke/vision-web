import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Fade } from '@material-ui/core';
import colors from '../../constants/colors';
import Collapse from '@material-ui/core/Collapse';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: `linear-gradient(45deg, ${colors.MAIN} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '5px 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 10,
    minHeight: 60,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: 'white',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export function CameraRow({ camera, key, _delete }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.row} key={key}>
      <div className={classes.container}>
        <div className={classes.name}>{camera.name}</div>
        <div className={classes.buttons}>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Play"
          >
            <a
              href={'http://127.0.0.1:3000/play/' + camera.id}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <IconButton className={classes.button} aria-label="play">
                <PlayArrowIcon />
              </IconButton>
            </a>
          </LightTooltip>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Edit"
          >
            <IconButton
              className={classes.button}
              aria-label="play"
              onClick={() => console.log('edit')}
            >
              <EditIcon />
            </IconButton>
          </LightTooltip>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Delete"
          >
            <IconButton
              className={classes.button}
              aria-label="play"
              onClick={() => {
                console.log(camera);
                _delete(camera.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </LightTooltip>
          <LightTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Show details"
          >
            <IconButton
              className={clsx(classes.expand, classes.button, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </LightTooltip>
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography paragraph>{camera.url}</Typography>
        <Typography paragraph>{camera.sub_stream}</Typography>
        <Typography paragraph>{camera.suffix}</Typography>
        {/*<Typography paragraph>{camera.ptz_app}</Typography>*/}
        {/*<Typography paragraph>{camera.udp_supported}</Typography>*/}
        {/*<Typography paragraph>{camera.enabled}</Typography>*/}
      </Collapse>
    </div>
  );
}

CameraRow.propTypes = {
  camera: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
  _delete: PropTypes.func.isRequired,
};
