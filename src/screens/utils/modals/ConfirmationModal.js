import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { palette } from '../../../constants/palette';
const classNames = require('classnames');

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderColor: palette.primary.main,
    borderRadius: 3,
    border: 2,
    color: palette.primary.main,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 20,
    padding: '30px 50px',
    outline: 'none',
    width: 460,
    alignItems: 'center',
  },
  button: {
    borderRadius: 3,
    border: 0,
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  yes: {
    color: 'green',
  },
  no: {
    color: 'red',
  },
  row: {
    alignSelf: 'flex-end',
  },
}));

export default function FadeModal({ action, opened, closeModal }) {
  const classes = useStyles();

  const handleClose = () => {
    closeModal(action.modalId);
  };

  const isOpen = () => {
    return opened.includes(action.modalId);
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
          <div>{action.text}</div>
          <div className={classes.row}>
            <button
              className={classNames(classes.button, classes.yes)}
              onClick={() => {
                action.action();
                handleClose();
              }}
            >
              Yes
            </button>
            <button
              className={classNames(classes.button, classes.no)}
              onClick={() => {
                handleClose();
              }}
            >
              No
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

FadeModal.propTypes = {
  action: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  opened: PropTypes.array.isRequired,
};
