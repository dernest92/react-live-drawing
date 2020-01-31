import React, { createContext, Component } from "react";
import io from "socket.io-client";
export const Context = createContext();

export const socket = io("http://localhost:3000");

export default class ContextProvider extends Component {
  state = {
    msg: "hello",
    boards: []
  };

  componentDidMount() {
    const socket = io("http://localhost:3000");
    this.setState({ socket });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
