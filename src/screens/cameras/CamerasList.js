import React from 'react';
import PropTypes from 'prop-types';
import { CameraRow } from './CameraRow';

export function CamerasList({
  cameras,
  delete_,
  openModal,
  setCurrent,
  cloneCamera,
}) {
  return (
    <div>
      {cameras.map((camera, index) => (
        <CameraRow
          camera={camera}
          key={index}
          delete_={delete_}
          setCurrent={setCurrent}
          openModal={openModal}
          cloneCamera={cloneCamera}
        />
      ))}
    </div>
  );
}

CamerasList.propTypes = {
  cameras: PropTypes.array.isRequired,
  delete_: PropTypes.func,
  openModal: PropTypes.func,
  setCurrent: PropTypes.func,
  cloneCamera: PropTypes.func,
};
