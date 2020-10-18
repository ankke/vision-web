import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {Fade} from '@material-ui/core';
import colors from '../../constants/colors';
import Collapse from '@material-ui/core/Collapse';
import {ExpandMore} from '@material-ui/icons';
import clsx from 'clsx';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import InfoRow from './InfoRow';
import ModalContainer from "./modal/ModalContainer";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

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
  },
  row: {
    background: `linear-gradient(45deg, ${colors.MAIN} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '5px 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
    flex: 1,
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

export function CameraRow({ camera, _delete, editCamera, openModal }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.row}>
      <div className={classes.container}>
        <ResponsiveEllipsis
          text={camera.name}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className={classes.name}
        />
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
              aria-label="edit"
              onClick={() => openModal()}
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
        <InfoRow name={'Url:'} value={camera.url} />
        <InfoRow name={'Sub streams:'} value={camera.sub_streams} />
        <InfoRow name={'Suffix:'} value={camera.suffix} />
        <InfoRow name={'Ptz app:'} value={camera.ptz_app} />
        <InfoRow name={'Udp:'} value={camera.udp_supported} />
      </Collapse>
      <ModalContainer action={editCamera} />
    </div>
  );
}

CameraRow.propTypes = {
  camera: PropTypes.object.isRequired,
  _delete: PropTypes.func.isRequired,
  editCamera: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
