import { get, put } from '../../api/requests';
import { setSettings } from './settingsSlice';
import { settings_ } from '../../api/apiConf';

export const getSettingsRequest = () => {
  return async (dispatch) => {
    const settings = await get(settings_)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
    dispatch(setSettings(settings));
  };
};

export const editSettingsRequest = ({ settings }) => {
  return async (dispatch) => {
    const { path, udp_preferred } = settings;
    await put(settings_, {
      path,
      udp_preferred,
    })
      .then(() => {
        dispatch(getSettingsRequest());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
