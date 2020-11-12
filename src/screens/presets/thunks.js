import {
  configuration,
  configurations,
  deleteConfiguration,
} from '../../api/apiConf';
import { _delete, get, post, put } from '../../api/requests';
import { getPresets } from './presetsSlice';

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
    const { name, subnet, cameras } = preset;
    await put(configuration, {
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
  console.log({ id });
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
