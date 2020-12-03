import {
  configuration,
  configurations,
  deleteConfiguration,
  getCamerasForConfiguration, getConfiguration,
} from '../../api/apiConf';
import { _delete, get, post, put } from '../../api/requests';
import { setPreset, getCamerasForPreset, getPresets } from './presetsSlice';

export const addPresetRequest = ({ preset }) => {
  return async (dispatch) => {
    const { name, subnet, cameras } = preset;
    await post(configuration, {
      name,
      subnet,
      cameras,
    })
      .then(() => {
        dispatch(getPresetsRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editPresetRequest = ({ preset }) => {
  return async (dispatch) => {
    const { id, name, subnet, cameras } = preset;
    await put(configuration, {
      id,
      name,
      subnet,
      cameras,
    })
      .then(() => {
        dispatch(getPresetsRequest());
        dispatch(getCamerasForPresetRequest(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPresetsRequest = () => {
  return async (dispatch) => {
    const presets = await get(configurations)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(getPresets(presets));
  };
};

export const deletePresetRequest = (id) => {
  return async (dispatch) => {
    await _delete(deleteConfiguration(id))
      .then((res) => {
        dispatch(getPresetsRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCamerasForPresetRequest = (id) => {
  console.log('getCamerasForPresetRequest');
  return async (dispatch) => {
    const cameras = await get(getCamerasForConfiguration(id))
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(getCamerasForPreset(cameras));
  };
};

export const getPresetRequest = (id) => {
  console.log('getPresetRequest');
  return async (dispatch) => {
    const cameras = await get(getConfiguration(id))
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(setPreset(cameras));
  };
};
