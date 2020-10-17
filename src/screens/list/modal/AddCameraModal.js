import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import colors from '../../../constants/colors.json';
import InputRow from './InputRow';
import CheckboxRow from './CheckboxRow';
import Add from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

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
    alignItems: 'flex-start',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: 3,
    border: 2,
    color: colors.MAIN,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 20,
    textAlign: 'center',
    padding: '30px 50px',
    outline: 'none',
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
  circleButton: {
    outline: 'none',
    background: 'white',
    borderColor: colors.MAIN,
    borderRadius: '50%',
    border: 2,
    color: colors.MAIN,
    height: 30,
    width: 30,
    margin: 5,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    alignSelf: 'center',
  },
  addRemove: {
    display: 'flex',
    alignSelf: 'center',
  },
}));

export default function FadeModal({ addCamera, isOpen, closeModal }) {
  const classes = useStyles();

  const handleClose = () => {
    closeModal();
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
  const [sub_streams_no, setSubStreamsNo] = useState(0);

  const onChange = (event, name) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const addSubStream = (event) => {
    console.log(state);
    const newList = state.sub_streams.concat(event.target.value);
    setState({
      ...state,
      sub_streams: newList,
    });
  };

  const render_sub_streams_rows = () => {
    const sub_streams_rows = [];
    for (let i = 0; i < sub_streams_no; i++) {
      sub_streams_rows.push(
        <InputRow
          label={''}
          name={'sub_streams'}
          onChange={addSubStream}
          key={0}
        />
      );
    }
    return sub_streams_rows;
  };

  const rows = [
    {
      tag: InputRow,
      args: { label: 'Name:', name: 'name', onChange: onChange },
    },
    { tag: InputRow, args: { label: 'Url:', name: 'url', onChange: onChange } },
    {
      tag: InputRow,
      args: { label: 'Suffix:', name: 'suffix', onChange: onChange },
    },
    {
      tag: CheckboxRow,
      args: {
        label: 'Udp supported',
        state: state['udp_supported'],
        name: 'udp_supported',
        onChange: onChange,
      },
    },
    {
      tag: CheckboxRow,
      args: {
        label: 'Ptz camera',
        state: state['ptz_app'],
        name: 'ptz_app',
        onChange: onChange,
      },
    },
    {
      tag: InputRow,
      args: {
        label: 'Sub streams:',
        name: 'sub_streams',
        onChange: addSubStream,
      },
    },
  ];

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
          {rows.map((row, index) => {
            return <row.tag {...row.args} key={index} />;
          })}
          {render_sub_streams_rows()}
          <div className={classes.addRemove}>
            <IconButton
              className={classes.circleButton}
              aria-label="add"
              onClick={() => setSubStreamsNo(sub_streams_no + 1)}
            >
              <Add />
            </IconButton>
            <IconButton
              className={classes.circleButton}
              aria-label="remove"
              onClick={() => setSubStreamsNo(sub_streams_no - 1)}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <button
            className={classes.button}
            onClick={() => {
              addCamera(state);
              setState(initialState);
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