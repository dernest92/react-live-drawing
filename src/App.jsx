import React, { useContext, useEffect } from "react";
import Lobby from "./pages/lobby-page/lobby";
import Drawing from "./pages/drawing-page/drawing";
import NewBoard from "./pages/new-board-page/newBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider, { socket } from "./contextProvider";
import "./global.scss";

const App = () => {
  socket.on("newBoardCreated", () => {
    console.log("newBoardCreated");
  });
  return (
    <ContextProvider>
      <div className="App">
        <div className="container">
          <Router>
            <Switch>
              <Route path="/drawing/:boardId">
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
    </ContextProvider>
  );
};

export default App;
