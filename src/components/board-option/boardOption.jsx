import React from "react";
import { FaPlusSquare, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./boardOption.scss";

const BoardOption = ({ isNew, linkTo, boardName }) => {
  return (
    <Link to={linkTo} className="board-option">
      <div className="board-icon">
        {isNew ? <FaPlusSquare color="#2ecc71" /> : <FaEdit color="#fcfcfc" />}
      </div>
      <div className="board-name">{boardName}</div>
    </Link>
  );
};

export default BoardOption;
