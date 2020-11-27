import React from 'react';
import PropTypes from 'prop-types';
import { PresetRow } from './PresetRow';

export function PresetsList({ presets, delete_, openModal, setCurrent }) {
  return (
    <div>
      {presets.map((preset, index) => (
        <PresetRow
          preset={preset}
          key={index}
          delete_={delete_}
          setCurrent={setCurrent}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

PresetsList.propTypes = {
  presets: PropTypes.array.isRequired,
  delete_: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
