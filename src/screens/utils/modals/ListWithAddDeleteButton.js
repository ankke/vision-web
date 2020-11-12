import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputRow from './InputRow';
import Label from './Label';
import RemoveButton from '../buttons/RemoveButton';
import AddButton from '../buttons/AddButton';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '5px 0',
  },
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

export default function ListWithAddDeleteButton({ list, label, onChange }) {
  const classes = useStyles();

  useEffect(() => {
    setState(list);
  }, [list]);

  const [state, setState] = useState(list);

  const removeElement = (index) => {
    return () => {
      const newState = state.filter((_, i) => i !== index);
      onChange(newState);
    };
  };

  const addElement = () => {
    const newState = state.concat('');
    onChange(newState);
  };

  const editElement = (index) => {
    return (value) => {
      const newState = Object.assign([], state);
      newState[index] = value;
      onChange(newState);
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
    <div className={classes.container}>
      <Label label={label} />
      {renderElements()}
      <AddButton
        style={classes.circleButton}
        label="add row"
        onClick={addElement}
      />
    </div>
  );
}

ListWithAddDeleteButton.propTypes = {
  list: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
