import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import colors from '../../../constants/colors.json';
import InputRow from '../../utils/modals/InputRow';
import CheckboxRow from '../../utils/modals/CheckboxRow';
import ListWithAddDeleteButton from '../../utils/modals/ListWithAddDeleteButton';
import Label from '../../utils/modals/Label';

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
    borderColor: colors.MAIN,
    borderRadius: 3,
    border: 2,
    color: colors.MAIN,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 20,
    padding: '30px 50px',
    outline: 'none',
    maxHeight: '70%',
    width: 460,
  },
  button: {
    background: `linear-gradient(45deg, ${colors.MAIN} 50%, ${colors.MAIN_V} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 20,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    alignSelf: 'flex-end',
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

export default function FadeModal({
  action,
  opened,
  closeModal,
  camera,
  modalId,
  removeCurrent,
  editCurrent,
}) {
  const classes = useStyles();

  const handleClose = () => {
    closeModal(modalId);
    removeCurrent();
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

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (camera === undefined) {
      setState(initialState);
    } else {
      setState(camera);
    }
  }, [camera]);

  const onChange = (value, name) => {
    editCurrent(name)(value);
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

  const isOpen = () => {
    return opened.includes(modalId);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-add-camera"
      aria-describedby="transition-modal-add-camera-form"
      className={classes.modal}
      open={isOpen()}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen()}>
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
            list={camera ? camera.sub_streams : []}
            onChange={editCurrent('sub_streams')}
          />
          <button
            className={classes.button}
            onClick={() => {
              action.action(state);
              setState(initialState);
              handleClose(modalId);
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
  action: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  editCurrent: PropTypes.func.isRequired,
  removeCurrent: PropTypes.func.isRequired,
  opened: PropTypes.array.isRequired,
  camera: PropTypes.object,
  modalId: PropTypes.string.isRequired,
};
