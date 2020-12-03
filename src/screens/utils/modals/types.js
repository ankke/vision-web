import React from 'react';
import PresetModalContainer from '../../presets/modals/PresetModalContainer';
import ConfirmationModalContainer from './ConfirmationModalContainer';

export const EDIT_PRESET_MODAL = 'EDIT_PRESET_MODAL';
export const ADD_PRESET_MODAL = 'ADD_PRESET_MODAL';
export const CONFIRMATION_MODAL = 'CONFIRMATION_MODAL';

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
  EDIT_PRESET_MODAL: EditPresetModal,
  ADD_PRESET_MODAL: AddPresetModal,
  CONFIRMATION_MODAL: ConfirmationModal,
};
