import { down, left, pano, right, up } from '../../api/apiConf';
import { get } from '../../api/requests';
import { openModal } from '../utils/modals/modalsSlice';
import { CONFIRMATION_MODAL } from '../utils/modals/types';

export const UP = 0;
export const RIGHT = 1;
export const DOWN = 2;
export const LEFT = 3;

const directionMapper = {
  0: up,
  1: right,
  2: down,
  3: left,
};

export const move = (cameraId, sub_stream) => (direction, rotValue) => {
  return async (_) => {
    const uri = directionMapper[(direction - rotValue + 4) % 4];
    console.log(uri);
    await get(uri(cameraId, sub_stream)).catch((err) => {
      console.log(err);
    });
  };
};

export const takePanoPhotoRequest = (cameraId, tag, sub_stream, rotValue) => {
  return async (dispatch) => {
    await get(pano(cameraId, tag, sub_stream, rotValue))
      .then((res) => {
        if (res.status === 537) {
          dispatch(openModal(CONFIRMATION_MODAL + 'pano'));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
