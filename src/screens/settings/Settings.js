import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputRow from '../utils/modals/InputRow';
import Label from '../utils/modals/Label';
import { palette } from '../../constants/palette';
import CheckboxRow from '../utils/modals/CheckboxRow';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 84,
    marginLeft: 30,
    backgroundImage: "url('/spejs_logo.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ' right bottom',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    heigth: 60,
    fontSize: 30,
    marginBottom: 15,
    color: palette.secondary.main,
  },
  input: {
    maxWidth: 500,
    fontSize: 20,
    margin: '10px 0px',
    textAlign: 'left',
  },
  checkBoxLabel: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 20,
    marginLeft: -9,
  },
  button: {
    background: `linear-gradient(45deg, ${palette.secondary.main} 50%, ${palette.secondary.light} 100%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    width: 'max-content',
    padding: 10,
    fontSize: 16,
    marginTop: 20,
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
    fontFamily: "'Bai Jamjuree', sans-serif",
    marginRight: 20,
  },
  disabled: {
    background: `linear-gradient(45deg, #989898 50%, #989890 100%)`,
    backgroundColor: '',
  },
}));

export function Settings({
  settings,
  editSettingsRequest,
  getSettingsRequest,
}) {
  const classes = useStyles();

  useEffect(() => {
    getSettingsRequest();
  }, []);

  const initialState = {
    path: '',
    udp_preferred: true,
  };

  const [state, setState] = useState(settings ? settings : initialState);
  const [edited, setEdited] = useState(false);

  const rows = [
    {
      tag: InputRow,
      label: {
        label: 'Path to saved multimedia:',
        style: classes.input,
      },
      args: {
        name: 'path',
        value: state['path'],
        style: classes.input,
      },
    },
    {
      tag: CheckboxRow,
      label: {
        label: 'UDP connection preferred',
        style: classes.checkBoxLabel,
      },
      args: {
        state: state['udp_preferred'],
        name: 'udp_preferred',
      },
    },
  ];

  const onChange = (value, name) => {
    setEdited(true);
    setState({ ...state, [name]: value });
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Settings</div>
      {rows.map((row, index) => {
        return (
          <div key={index} className={classes.row}>
            <Label key={index} {...row.label}>
              <row.tag {...row.args} key={index} onChange={onChange} />
            </Label>
          </div>
        );
      })}
      <div>
        <button
          className={classNames(classes.button, {
            [classes.disabled]: !edited,
          })}
          onClick={() => {
            setEdited(false);
            editSettingsRequest(state);
          }}
          disabled={!edited}
        >
          Save
        </button>
      </div>
    </div>
  );
}

Settings.propTypes = {
  editSettingsRequest: PropTypes.func.isRequired,
  getSettingsRequest: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};
