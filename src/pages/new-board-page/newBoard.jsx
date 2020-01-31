import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contextProvider";
import { Link, useHistory } from "react-router-dom";

const NewBoard = () => {
  const history = useHistory();
  const addBoard = () => {
    socket.emit("newBoard", boardName);
    history.push(`/drawing/${boardName}`);
  };
  const { socket } = useContext(Context);
  useEffect(() => {}, [socket]);

  const [boardName, setBoardName] = useState("");
  return (
    <div className="card p10">
      <h2 className="card-title">New Board</h2>
      <input
        className="txt-input"
        type="text"
        placeholder="Board Name..."
        value={boardName}
        onChange={e => setBoardName(e.target.value)}
      />
      <button className="btn btn-success" onClick={addBoard}>
        Submit
      </button>
      <Link to="/" className="btn btn-danger">
        Cancel
      </Link>
    </div>
  );
};
export default NewBoard;
