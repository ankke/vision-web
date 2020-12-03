const apiUrl = 'http://127.0.0.1:5000';
// cameras
export const camera_ = apiUrl + '/camera';
export const cameras = apiUrl + '/cameras';
export const showCamera = (cameraId) => camera_ + '/show?id=' + cameraId;
export const takePhoto = (cameraId) => camera_ + '/photo?id=' + cameraId;
export const killCamera = (cameraId) => camera_ + '/kill?id=' + cameraId;
export const deleteCamera = (cameraId) => camera_ + '/' + cameraId;

// presets
export const configuration = apiUrl + '/configuration';
export const getConfiguration = (presetId) => configuration + '/' + presetId;
export const configurations = apiUrl + '/configurations';
export const deleteConfiguration = (presetId) => configuration + '/' + presetId;
export const getCamerasForConfiguration = (presetId) =>
  configuration + '/' + presetId + '/cameras';

// settings
