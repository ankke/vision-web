import { down, left, pano, right, up } from '../../api/apiConf';
import { get } from '../../api/requests';

export const UP = 'up';
export const LEFT = 'left';
export const RIGHT = 'right';
export const DOWN = 'down';

const directionMapper = {
  [UP]: up,
  [LEFT]: left,
  [RIGHT]: right,
  [DOWN]: down,
};

export const move = (cameraId, sub_stream) => (direction) => {
  return async (_) => {
    const uri = directionMapper[direction];
    console.log(uri);
    await get(uri(cameraId, sub_stream)).catch((err) => {
      console.log(err);
    });
  };
};

export const takePanoPhotoRequest = (cameraId, tag, sub_stream) => {
  return async (_) => {
    await get(pano(cameraId, tag, sub_stream)).catch((err) => {
      console.log(err);
    });
  };
};
