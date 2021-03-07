import React from "react";
import "./App.less";
import Search from "./component/containers/Search";
import Overview from "./component/containers/Overview";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
