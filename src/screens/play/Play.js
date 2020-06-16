import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  video: {
    height: 500,
    width: 500,
  },
};

class Play extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <img className={classes.video} src={this.props.src} alt={'video'} />
        {this.props.src}
      </div>
    );
  }
}

Play.propTypes = {
  history: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  killCamera: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Play);
