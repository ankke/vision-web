import PropTypes from 'prop-types';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WithTooltip from './buttons/WithTooltip';
import CircleButton from './buttons/CircleButton';

export default function MoreButton({ title, onClick, style }) {
  return (
    <WithTooltip title={title ? title : 'More'}>
      <CircleButton onClick={onClick} label="more" style={style}>
        <MoreHorizIcon />
      </CircleButton>
    </WithTooltip>
  );
}

MoreButton.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
