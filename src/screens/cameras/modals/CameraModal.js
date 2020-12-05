import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputRow from '../../utils/modals/InputRow';
import CheckboxRow from '../../utils/modals/CheckboxRow';
import ListWithAddDeleteButton from '../../utils/modals/ListWithAddDeleteButton';
import Label from '../../utils/modals/Label';
import { palette } from '../../../constants/palette';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    background: 'white',
    borderColor: palette.primary.main,
    borderRadius: 3,
    border: 2,
    color: palette.primary.main,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 20,
    padding: '30px 50px',
    outline: 'none',
    maxHeight: '70%',
    width: 460,
    fontFamily: "'Bai Jamjuree', sans-serif",
  },
  button: {
    background: `linear-gradient(45deg, ${palette.primary.main} 50%, ${palette.primary.light} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 20,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    alignSelf: 'flex-end',
    fontFamily: "'Bai Jamjuree', sans-serif",
  },
  checkBoxLabel: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    margin: '5px 0px',
  },
}));

export default function FadeModal({ action, camera, getCamera, cameraId }) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (cameraId !== undefined) {
      getCamera(cameraId);
    }
  }, []);

  const handleClose = () => {
    history.goBack();
  };

  const initialState = {
    name: '',
    url: '',
    sub_streams: [],
    suffix: '',
    ptz_app: false,
    udp_supported: false,
    enabled: false,
  };

  const [state, setState] = useState(cameraId ? camera : initialState);

  const onChange = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const rows = [
    {
      tag: InputRow,
      label: {
        label: 'Name:',
      },
      args: {
        name: 'name',
        value: state['name'],
      },
    },
    {
      tag: InputRow,
      label: { label: 'Url:' },
      args: {
        name: 'url',
        value: state['url'],
      },
    },
    {
      tag: InputRow,
      label: {
        label: 'Suffix:',
      },
      args: {
        name: 'suffix',
        value: state['suffix'],
      },
    },
    {
      tag: CheckboxRow,
      label: {
        label: 'Udp supported',
        style: classes.checkBoxLabel,
      },
      args: {
        state: state['udp_supported'],
        name: 'udp_supported',
      },
    },
    {
      tag: CheckboxRow,
      label: {
        label: 'Ptz camera',
        style: classes.checkBoxLabel,
      },
      args: {
        state: state['ptz_app'],
        name: 'ptz_app',
      },
    },
  ];

  return (
    <Modal
      aria-labelledby="transition-modal-add-camera"
      aria-describedby="transition-modal-add-camera-form"
      className={classes.modal}
      open
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in>
        <div className={classes.paper}>
          {rows.map((row, index) => {
            return (
              <div key={index} className={classes.row}>
                <Label key={index} {...row.label}>
                  <row.tag {...row.args} key={index} onChange={onChange} />
                </Label>
              </div>
            );
          })}
          <ListWithAddDeleteButton
            label={'Sub streams: '}
            list={state.sub_streams}
            onChange={(value) => setState({ ...state, sub_streams: value })}
          />
          <button
            className={classes.button}
            onClick={() => {
              const filteredSubStreams = state.sub_streams.filter((s) => s !== '')
              setState({
                ...state,
                sub_streams: filteredSubStreams,
              });
              console.log(state);
              action(state);
              handleClose();
            }}
          >
            Save
          </button>
        </div>
      </Fade>
    </Modal>
  );
}

FadeModal.propTypes = {
  props: PropTypes.func.isRequired,
  cameraId: PropTypes.func,
  camera: PropTypes.object,
  action: PropTypes.func.isRequired,
  getCamera: PropTypes.func,
};
