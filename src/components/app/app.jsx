import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Table from "../table/table";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Table />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
