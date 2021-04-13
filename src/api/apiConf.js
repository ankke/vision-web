const apiUrl = 'http://127.0.0.1:5000';
// cameras
export const camera_ = apiUrl + '/camera';
export const cameras = apiUrl + '/cameras';
export const streamCamera = (cameraId, sub_stream) =>
  camera_ +
  '/stream?id=' +
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
  encodeURIComponent(sub_stream);
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

//ptz
export const left = (cameraId, sub_stream) =>
  apiUrl +
  '/ptz/left?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const right = (cameraId, sub_stream) =>
  apiUrl +
  '/ptz/right?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const up = (cameraId, sub_stream) =>
  apiUrl +
  '/ptz/up?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const down = (cameraId, sub_stream) =>
  apiUrl +
  '/ptz/down?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const pano = (cameraId, tag, sub_stream, rotValue) =>
  apiUrl +
  '/ptz/pano?id=' +
  cameraId +
  '&tag=' +
  tag +
  '&sub_stream=' +
  encodeURIComponent(sub_stream) +
  '&rot_value=' +
  rotValue;
export const start = (cameraId, tag, sub_stream) =>
  apiUrl +
  '/camera/start?id=' +
  cameraId +
  '&tag=' +
  tag +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
export const stop_ = (cameraId, sub_stream) =>
  apiUrl +
  '/camera/stop?id=' +
  cameraId +
  '&sub_stream=' +
  encodeURIComponent(sub_stream);
