const apiUrl = 'http://127.0.0.1:5000';
export const cameras = apiUrl + '/cameras';
export const camera = (cameraId) => cameras + '/?id=' + cameraId;
export const deleteCamera = (cameraId) => cameras + '/delete?id=' + cameraId;
export const showCamera = (cameraId) => cameras + '/show?id=' + cameraId;
export const takePhoto = (cameraId) => cameras + '/photo?id=' + cameraId;
export const killCamera = (cameraId) => cameras + '/kill?id=' + cameraId;
export const addCamera = cameras + '/add';
export const editCamera = cameras + '/edit';
