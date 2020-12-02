import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import { ExpandMore } from '@material-ui/icons';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import WithTooltip from '../utils/buttons/WithTooltip';
import { palette } from '../../constants/palette';

const classNames = require('classnames');

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    background: `linear-gradient(45deg, ${palette.primary.main} 50%, ${palette.primary.light} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '5px 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    flex: 1,
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  button: {
    color: 'white',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export function ExpandableRow({ name, buttons, info }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.row}>
      <div className={classes.container}>
        <ResponsiveEllipsis
          text={name}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className={classes.name}
        />
        <div className={classes.buttons}>
          {buttons()}
          <WithTooltip title="Show details">
            <IconButton
              className={classNames(classes.expand, classes.button, {
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
        {info()}
      </Collapse>
    </div>
  );
}

ExpandableRow.propTypes = {
  name: PropTypes.string.isRequired,
  buttons: PropTypes.func,
  info: PropTypes.func.isRequired,
};
