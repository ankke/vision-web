import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './constants/routes';
import Menu from './screens/Menu';

function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path={routes.homepage} component={Menu} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
