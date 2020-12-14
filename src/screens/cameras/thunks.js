import {
  cameras,
  killCamera,
  takePhoto,
  camera_,
  deleteCamera,
  getConfiguration,
  getCamera,
  streamCamera,
} from '../../api/apiConf';
import { get, post, _delete, put } from '../../api/requests';
import { getCameras } from './camerasSlice';
import { setCurrent, setPreset } from '../presets/presetsSlice';

export const addCameraRequest = ({ camera }) => {
  return async (dispatch) => {
    const {
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz,
      enabled,
    } = camera;
    await post(camera_, {
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz,
      enabled,
    })
      .then(() => {
        dispatch(getCamerasRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editCameraRequest = ({ camera }) => {
  return async (dispatch) => {
    console.log(camera);
    const {
      id,
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz,
      enabled,
    } = camera;
    await put(camera_, {
      id,
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz,
      enabled,
    })
      .then(() => {
        dispatch(getCamerasRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCamerasRequest = () => {
  return async (dispatch) => {
    const cam = await get(cameras)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(getCameras(cam));
  };
};

export const deleteCamerasRequest = (id) => {
  console.log({ id });
  return async (dispatch) => {
    await _delete(deleteCamera(id))
      .then((res) => {
        dispatch(getCamerasRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const killCamerasRequest = (id, subStream) => {
  return async () => {
    await get(killCamera(id, subStream))
      .then((res) => {
        window.open('about:blank', '_self');
        window.close();
        window.open('about:blank', '_self');
        window.close();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const killCamerasRequestWithoutClosing = (id, subStream) => {
  return async () => {
    await get(killCamera(id, subStream))
      .then((res) => {
        window.close();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const takePhotoRequest = (id, tag, sub_stream) => {
  return async () => {
    await get(takePhoto(id, tag, sub_stream))
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCameraRequest = (id) => {
  return async (dispatch) => {
    const camera = await get(getCamera(id))
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(setCurrent(camera));
  };
};

export const showCameraRequest = async (id, sub_stream) => {
  if (!sub_stream) {
    await get(getCamera(id))
      .then((res) => {
        const camera_ = res.json();
        const sub_stream_default =
          camera_.sub_stream.length > 0 ? camera_.sub_stream[0] : '';
        return streamCamera(id, sub_stream_default);
      })
      .catch((err) => {
        console.log(err);
        return undefined;
      });
  } else {
    return streamCamera(id, sub_stream);
  }
};
