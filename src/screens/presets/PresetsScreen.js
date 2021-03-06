import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ADD_PRESET_MODAL, ModalsTranslator } from '../utils/modals/types';
import AddButtonWithTooltip from '../utils/buttons/AddButtonWithTooltip';
import { PresetsList } from './PresetsList';
import { routes } from '../../constants/routes';
import { Route } from 'react-router';
import PresetCamerasContainer from './PresetCamerasContainer';
import { palette } from '../../constants/palette';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundImage: "url('/spejs_logo.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ' right bottom',
  },
  container: {
    padding: '20px 20px',
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 550,
  },
  addButton: {
    height: 50,
    width: 50,
    marginBottom: 30,
    marginRight: 30,
    marginLeft: 5,
  },
  title: {
    heigth: 60,
    fontSize: 30,
    marginBottom: 15,
    color: palette.primary.main,
    marginLeft: 10,
  },
};

class PresetsScreen extends Component {
  componentDidMount() {
    this.props.getPresets();
    this.props.getCameras();
    this.props.removePresetDetails();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.title}>Sets</div>
          <AddButtonWithTooltip
            onClick={() => this.props.openModal(ADD_PRESET_MODAL)}
            label={'Add preset'}
            title={'Add preset'}
            style={classes.addButton}
          />
          <PresetsList
            presets={this.props.presets}
            delete_={(id) => {
              this.props.delete(id);
              this.props.history.replace(routes.presets);
            }}
            setCurrent={this.props.setCurrent}
            openModal={this.props.openModal}
          />
          <ModalsTranslator.ADD_PRESET_MODAL action={this.props.addPreset} />
          <ModalsTranslator.EDIT_PRESET_MODAL action={this.props.editPreset} />
        </div>
        <Route
          exact
          path={routes.presetsCameras}
          component={PresetCamerasContainer}
        />
      </div>
    );
  }
}

PresetsScreen.propTypes = {
  history: PropTypes.object.isRequired,
  presets: PropTypes.array.isRequired,
  getPresets: PropTypes.func.isRequired,
  getCameras: PropTypes.func.isRequired,
  addPreset: PropTypes.func.isRequired,
  editPreset: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  editCamera: PropTypes.func.isRequired,
  removePresetDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresetsScreen);
