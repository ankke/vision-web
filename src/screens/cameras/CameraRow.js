import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../constants/colors';
import Collapse from '@material-ui/core/Collapse';
import {ExpandMore} from '@material-ui/icons';
import clsx from 'clsx';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import InfoRow from '../utils/InfoRow';
import {EDIT_MODAL} from '../utils/modals/types';
import WithTooltip from '../utils/buttons/WithTooltip';
import EditButtonWithTooltip from '../utils/buttons/EditButtonWithTooltip';
import DeleteButtonWithTooltip from '../utils/buttons/DeleteButtonWithTooltip';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

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

export function CameraRow({ camera, _delete, openModal, setCurrent }) {
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
          <WithTooltip title={'Play camera'}>
            <a
              href={'http://127.0.0.1:3000/play/' + camera.id}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <IconButton className={classes.button} aria-label="play">
                <PlayArrowIcon />
              </IconButton>
            </a>
          </WithTooltip>
          <EditButtonWithTooltip
            onClick={() => {
              setCurrent(camera);
              openModal(EDIT_MODAL);
            }}
            style={classes.button}
          />
          <DeleteButtonWithTooltip
            onClick={() => {
              _delete(camera.id);
            }}
            style={classes.button}
          />
          <WithTooltip title="Show details">
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
          </WithTooltip>
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <InfoRow name={'Url:'} value={camera.url} />
        <InfoRow name={'Sub streams:'} value={camera.sub_streams} />
        <InfoRow name={'Suffix:'} value={camera.suffix} />
        <InfoRow name={'Ptz app:'} value={camera.ptz_app} />
        <InfoRow name={'Udp:'} value={camera.udp_supported} />
      </Collapse>
    </div>
  );
}

CameraRow.propTypes = {
  camera: PropTypes.object.isRequired,
  _delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
