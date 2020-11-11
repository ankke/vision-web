import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputRow from './InputRow';
import Label from './Label';
import Add from '@material-ui/icons/Add';
import RemoveButton from '../RemoveButton';
import AddButton from "../AddButton";

const useStyles = makeStyles((theme) => ({
  circleButton: {
    height: 30,
    width: 30,
    margin: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
}));

export default function ListWithAddDeleteButton({ list, label }) {
  const classes = useStyles();

  const [state, setState] = useState(list);

  const removeElement = (index) => {
    return () => {
      const newState = state.filter((_, i) => i !== index);
      setState(newState);
    };
  };

  const addElement = () => {
    const newState = state.concat('');
    setState(newState);
  };

  const editElement = (index) => {
    return (value) => {
      const newState = Object.assign([], state);
      newState[index] = value;
      setState(newState);
    };
  };

  const renderElements = () => {
    return state.map((el, index) => (
      <div key={index} className={classes.row}>
        <InputRow
          name={label}
          onChange={editElement(index)}
          key={label + index}
          value={el}
          style={classes.input}
        />
        <RemoveButton
          style={classes.circleButton}
          label="remove row"
          onClick={removeElement(index)}
        />
      </div>
    ));
  };

  return (
    <div>
      <Label label={label} />
      {renderElements()}
      <AddButton
        style={classes.circleButton}
        label="add row"
        onClick={addElement}
      >
        <Add />
      </AddButton>
    </div>
  );
}

ListWithAddDeleteButton.propTypes = {
  list: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
