const apiUrl = 'http://127.0.0.1:5000';
// cameras
export const camera_ = apiUrl + '/camera';
export const cameras = apiUrl + '/cameras';
export const showCamera = (cameraId, sub_stream) =>
  camera_ +
  '/show?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const takePhoto = (cameraId, tag, sub_stream) =>
  camera_ +
  '/photo?id=' +
  cameraId +
  '&tag=' +
  tag +
  '&sub_stream=' +
  sub_stream;
export const killCamera = (cameraId, sub_stream) =>
  camera_ +
  '/kill?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const deleteCamera = (cameraId) => camera_ + '/' + cameraId;
export const getCamera = (cameraId) => camera_ + '/' + cameraId;

// presets
export const configuration = apiUrl + '/configuration';
export const getConfiguration = (presetId) => configuration + '/' + presetId;
export const configurations = apiUrl + '/configurations';
export const deleteConfiguration = (presetId) => configuration + '/' + presetId;
export const getCamerasForConfiguration = (presetId) =>
  configuration + '/' + presetId + '/cameras';

// settings
export const settings_ = apiUrl + '/settings';
