import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contextProvider";
import { Link, useHistory } from "react-router-dom";
import apiConnection from "../../apiConnection";

const NewBoard = () => {
  const history = useHistory();
  const addBoard = async () => {
    const slug = await apiConnection.createBoard(boardName);
    history.push(`/board/${slug}`);
  };
  const { socket } = useContext(Context);
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
