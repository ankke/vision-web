import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    borderColor: '#6d597a',
    borderRadius: 3,
    border: 2,
    color: '#6d597a',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 20,
    textAlign: 'center',
    padding: '30px 50px',
    outline: 'none',
  },
  item: {
    outline: 'none',
    background: 'white',
    borderColor: '#6d597a',
    borderRadius: 3,
    border: 2,
    color: '#6d597a',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
    width: 400,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    background: 'linear-gradient(45deg, #6d597a 50%, #963D5A 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
}));

export default function FadeModal({ addCamera, isOpen, closeModal }) {
  const classes = useStyles();

  const handleClose = () => {
    closeModal();
  };

  const [name, setName] = useState(' ');
  const [url, setUrl] = useState(' ');
  const [sub, setSub] = useState(' ');
  const [suffix, setSuffix] = useState(' ');
  const [ptz, setPtz] = useState(false);
  const [udp, setUdp] = useState(false);

  function reset() {
    setName('');
    setUrl('');
    setSub('');
    setSuffix('');
    setPtz(false);
    setUdp(false);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-add-camera"
      aria-describedby="transition-modal-add-camera-form"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <label className={classes.label}>
            Name:
            <input
              className={classes.item}
              type={'text'}
              name={'name'}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className={classes.label}>
            Url:
            <input
              className={classes.item}
              type={'text'}
              name={'url'}
              onChange={(event) => setUrl(event.target.value)}
            />
          </label>
          <label className={classes.label}>
            Sub stream:
            <input
              className={classes.item}
              type={'text'}
              name={'sub'}
              onChange={(event) => setSub(event.target.value)}
            />
          </label>
          <label className={classes.label}>
            Suffix:
            <input
              className={classes.item}
              type={'text'}
              name={'suffix'}
              onChange={(event) => setSuffix(event.target.value)}
            />
          </label>
          <label>
            Udp supported:
            <Checkbox
              checked={udp}
              onChange={(event) => setUdp(event.target.checked)}
              name="udp"
              color="#6d597a"
            />
          </label>
          <label>
            Ptz:
            <Checkbox
              checked={ptz}
              onChange={(event) => setPtz(event.target.checked)}
              name="ptz"
              color="#6d597a"
            />
          </label>
          <button
            className={classes.button}
            onClick={() => {
              addCamera({
                name: name,
                url: url,
                sub_stream: sub,
                suffix: suffix,
                udp_supported: udp,
                ptz_app: ptz,
                enabled: false,
              });
              reset();
              handleClose();
            }}
          >
            Add camera
          </button>
        </div>
      </Fade>
    </Modal>
  );
}

FadeModal.propTypes = {
  addCamera: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
