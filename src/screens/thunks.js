import { cameras, killCamera, takePhoto, camera_, deleteCamera } from '../api/apiConf';
import { get, post, _delete } from '../api/requests';
import { getCameras } from './camerasSlice';

export const addCameraRequest = ({ camera }) => {
  return async (dispatch) => {
    const {
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz_app,
      enabled,
    } = camera;
    await post(camera_, {
      name,
      url,
      sub_streams,
      suffix,
      udp_supported,
      ptz_app,
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

export const killCamerasRequest = (id) => {
  return async () => {
    await get(killCamera(id))
      .then((res) => {
        window.open('about:blank', '_self');
        window.close();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const takePhotoRequest = (id) => {
  return async () => {
    await get(takePhoto(id))
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
