import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage_edit";
import { SearchPage } from "./SearchPage";
import { FindPage } from "./FindPage";
import { CellarPage } from "./CellarPage";
import { RecommandPage } from "./RecommandPage";
import { TestPage } from "./test";

export const Router = () => {
  return (
    <Switch>
      <Route path="/test" component={TestPage} />
      <Route path="/recommand" component={RecommandPage} />
      <Route path="/winecellar" component={CellarPage} />
      <Route path="/find" component={FindPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
