import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../constants/colors';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    padding: '20px 20px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  addButton: {
    outline: 'none',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: '50%',
    border: 2,
    color: colors.MAIN,
    height: 60,
    width: 60,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    marginBottom: 30,
    marginRight: 30,
  },
};

class PresetsList extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.container}>
      
    </div>;
  }
}

PresetsList.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresetsList);
