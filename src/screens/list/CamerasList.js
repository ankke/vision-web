import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

import { routes } from '../../constants/routes';
import { getCamerasRequest } from '../thunks';
import colors from '../../constants/colors';

// const useStyles = makeStyles();

const renderListElement = (camera) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 220, height: 40, fontSize: 20 }}>
          {camera.name}
        </div>
        <PlayArrowIcon onClick={() => console.log('play')} />
        <EditIcon onClick={() => console.log('edit')} />
        <DeleteIcon onClick={() => console.log('delete')} />
      </div>
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: 1,
          width: '100%',
          backgroundColor: colors.NAVY_MAIN,
          marginBottom: 5,
        }}
      />
    </div>
  );
};

class CamerasList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCameras();
  }

  render() {
    return (
      <div>{this.props.cameras.map((camera) => renderListElement(camera))}</div>
    );
  }
}

CamerasList.propTypes = {
  history: PropTypes.object.isRequired,
  cameras: PropTypes.array.isRequired,
  getCameras: PropTypes.func.isRequired,
};

export default CamerasList;
