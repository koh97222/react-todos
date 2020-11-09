import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../pages/Top";
import TodoPage from "../pages/TodoPage";
import User from "../pages/User";

/**
 * WrapRouterコンポーネント
 * Routing機能を司る。
 */
const WrapRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/top" component={Top} />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/user" component={User} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default WrapRouter;
