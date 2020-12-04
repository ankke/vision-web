import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputRow from '../../utils/modals/InputRow';
import Label from '../../utils/modals/Label';
import { CamerasListWithCheckboxes } from './CamerasListWithCheckboxes';
import { palette } from '../../../constants/palette';

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

export default function FadeModal({
  action,
  opened,
  closeModal,
  preset,
  modalId,
  removeCurrent,
  editCurrent,
  cameras,
}) {
  const classes = useStyles();

  const handleClose = () => {
    closeModal(modalId);
    removeCurrent();
  };

  const initialState = {
    name: '',
    subnet: '',
    cameras: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (preset === undefined) {
      setState(initialState);
    } else {
      setState(preset);
    }
  }, [preset]);

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
      label: { label: 'Subnet:' },
      args: {
        name: 'subnet',
        value: state['subnet'],
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
          <Label label={'Cameras:'} />
          <CamerasListWithCheckboxes
            cameras={preset.cameras}
            camerasList={cameras}
            onChange={editCurrent('cameras')}
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
  preset: PropTypes.object,
  modalId: PropTypes.string.isRequired,
  cameras: PropTypes.array.isRequired,
};
