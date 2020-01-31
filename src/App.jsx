import React, { useState, useEffect } from "react";
import Lobby from "./pages/lobby-page/lobby";
import Drawing from "./pages/drawing-page/drawing";
import NewBoard from "./pages/new-board-page/newBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider, { socket } from "./contextProvider";
import "./global.scss";
import apiConnection from "./apiConnection";

const fetchDirectory = async updateFn => {
  const dir = await apiConnection.getDirectory();
  updateFn(dir);
};

const App = () => {
  socket.on("update-directory", dir => {
    updateDirectory(dir);
  });

  const [directory, updateDirectory] = useState([]);
  useEffect(() => {
    fetchDirectory(updateDirectory);
  }, []);

  return (
    <ContextProvider>
      <div className="App">
        <div className="container">
          <Router>
            <Switch>
              <Route path="/board/:slug">
                <Drawing directory={directory} />
              </Route>
              <Route path="/new-board">
                <NewBoard />
              </Route>
              <Route path="/">
                <Lobby directory={directory} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
