import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Example from "./screens/Example";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App({store, history}) {
  return (
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Example} />
                <Route path="/route" component={Example} />
            </Switch>
        </Router>
      </Provider>
  );
}

export default App;
