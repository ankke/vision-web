import { addCamera, cameras } from '../api/apiConf';
import { post, get } from '../api/requests';
import { getCameras } from './camerasSlice';

export const addCameraRequest = async ({
  name,
  url,
  sub_stream,
  suffix,
  udp_supported,
  ptz_app,
  enabled,
}) => {
  await post(addCamera, {
    name,
    url,
    sub_stream,
    suffix,
    udp_supported,
    ptz_app,
    enabled,
  }).catch((err) => {
    console.log(err);
  });
};

export const getCamerasRequest = () => {
  return async (dispatch) => {
    const cam = await get(cameras)
      .then((res) => {
        const json = res.json();
        console.log(json);
        return json;
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(getCameras(cam));
  };
};
