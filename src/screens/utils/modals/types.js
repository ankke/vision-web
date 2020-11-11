import React from 'react';
import CameraModalContainer from '../../list/modals/CameraModalContainer';

export const EDIT_MODAL = 'EDIT_MODAL';
export const ADD_MODAL = 'ADD_MODAL';

const AddCameraModal = (action) => {
  return <CameraModalContainer action={action} modalId={ADD_MODAL} />;
};

const EditCameraModal = (action) => {
  return <CameraModalContainer action={action} modalId={EDIT_MODAL} />;
};

export const ModalsTranslator = {
  ADD_MODAL: AddCameraModal,
  EDIT_MODAL: EditCameraModal,
};
