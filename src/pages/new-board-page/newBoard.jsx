import React from "react";
import { Link } from "react-router-dom";

const NewBoard = () => {
  return (
    <div className="card p10">
      <h2 className="card-title">New Board</h2>
      <input class="txt-input" type="text" placeholder="Board Name..." />
      <button className="btn btn-success">Submit</button>
      <Link to="/" className="btn btn-danger">
        Cancel
      </Link>
    </div>
  );
};
export default NewBoard;
