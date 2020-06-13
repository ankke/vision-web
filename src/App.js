import gitReact from "react";
import "./App.css";
import { Provider } from "react-redux";
import Example from "./screens/Example";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./constants/routes";
import Menu from "./components/Menu";

function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={routes.HOME} component={Example} />
          <Route path={routes.EXAMPLE} component={Menu} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
