import PropTypes from 'prop-types';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WithTooltip from './WithTooltip';
import CircleButton from './CircleButton';

export default function MoreButton({ onClick, style }) {
  return (
    <WithTooltip title="More">
      <CircleButton onClick={onClick} label="more" style={style}>
        <MoreHorizIcon />
      </CircleButton>
    </WithTooltip>
  );
}

MoreButton.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
