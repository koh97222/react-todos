import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../pages/Top";
import TodoPage from "../pages/TodoPage";
import TicTacToe from "../pages/TicTacToe";
import Wheather from "../pages/Weather";

/**
 * WrapRouterコンポーネント
 * Routing機能を司る。
 */
const WrapRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/tictactoe" component={TicTacToe} />
          <Route exact path="/weather" component={Wheather} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default WrapRouter;
