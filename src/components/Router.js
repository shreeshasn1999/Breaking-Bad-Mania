import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Char_details from "./Char_details";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/character/:charcterId" component={Char_details}></Route>
    </Switch>
  </BrowserRouter>
);
export default Router;
