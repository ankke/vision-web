import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './constants/routes';
import Menu from './screens/menu/Menu';
import PlayContainer from './screens/play/PlayContainer';
import PropTypes from 'prop-types';

function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={routes.play} component={PlayContainer} />
          <Route path={routes.homepage} component={Menu} />
        </Switch>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.func.isRequired,
};

export default App;
