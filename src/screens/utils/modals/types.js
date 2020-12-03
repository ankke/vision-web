import React from 'react';
import CameraModalContainer from '../../cameras/modals/CameraModalContainer';
import PresetModalContainer from '../../presets/modals/PresetModalContainer';
import ConfirmationModalContainer from './ConfirmationModalContainer';
// import ConfirmationModalContainer from './ConfirmationModalContainer';

export const EDIT_CAMERA_MODAL = 'EDIT_CAMERA_MODAL';
export const ADD_CAMERA_MODAL = 'ADD_CAMERA_MODAL';
export const EDIT_PRESET_MODAL = 'EDIT_PRESET_MODAL';
export const ADD_PRESET_MODAL = 'ADD_PRESET_MODAL';
export const CONFIRMATION_MODAL = 'CONFIRMATION_MODAL';

// const AddCameraModal = (action) => {
//   return <CameraModalContainer action={action} modalId={ADD_CAMERA_MODAL} />;
// };
//
// const EditCameraModal = (action) => {
//   return <CameraModalContainer action={action} modalId={EDIT_CAMERA_MODAL} />;
// };

const AddPresetModal = (action) => {
  return <PresetModalContainer action={action} modalId={ADD_PRESET_MODAL} />;
};

const EditPresetModal = (action) => {
  return <PresetModalContainer action={action} modalId={EDIT_PRESET_MODAL} />;
};

const ConfirmationModal = (action) => {
  return <ConfirmationModalContainer action={action} />;
};

export const ModalsTranslator = {
  // ADD_CAMERA_MODAL: AddCameraModal,
  // EDIT_CAMERA_MODAL: EditCameraModal,
  EDIT_PRESET_MODAL: EditPresetModal,
  ADD_PRESET_MODAL: AddPresetModal,
  CONFIRMATION_MODAL: ConfirmationModal,
};
