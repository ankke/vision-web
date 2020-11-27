import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from '@material-ui/core';
import LightTooltip from '../LightTooltip';

export default function WithTooltip({ title, children }) {
  return (
    <LightTooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={title}
      placement="right"
    >
      {children}
    </LightTooltip>
  );
}

WithTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
