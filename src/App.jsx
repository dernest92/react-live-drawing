import React from "react";
import Lobby from "./pages/lobby-page/lobby";
import Drawing from "./pages/drawing-page/drawing";
import NewBoard from "./pages/new-board-page/newBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./global.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/drawing">
              <Drawing />
            </Route>
            <Route path="/new-board">
              <NewBoard />
            </Route>
            <Route path="/">
              <Lobby />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
