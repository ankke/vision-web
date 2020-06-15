// import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import EditIcon from '@material-ui/icons/Edit';
// import { routes } from '../../constants/routes';
// import colors from '../constants/colors';
//
// const useStyles = makeStyles();
//
// class CamerasList extends Component {
//   _routeTo = (newLocation) => {
//     this.props.history.push(newLocation);
//   };
//
//   render() {
//       return super.render();
//   }
//
//     const renderListElement = (camera) => {
//     return (
//       <div>
//         <div>camera.name</div>
//         <PlayArrowIcon onClick={showCamera} />
//         <EditIcon
//           onClick={() => {
//             history.push(routes.editCamera);
//           }}
//         />
//         <DeleteIcon onClick={deleteCamera} />
//       </div>
//     );
//   };
//
//   return <div>{cameras.map((camera) => renderListElement(camera))}</div>;
// }
//
// CamerasList.propTypes = {
//     history: PropTypes.object.isRequired,
// };
//
// export default CamerasList;
