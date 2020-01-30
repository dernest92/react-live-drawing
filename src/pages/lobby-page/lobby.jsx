import React from "react";
import BoardOption from "../../components/board-option/boardOption";
import "./lobby.scss";

const Lobby = () => {
  return (
    <div className="card p10">
      <h2 className="card-title">Choose a Board</h2>
      <div>
        <BoardOption isNew linkTo="new-board" boardName="Create New Board" />
        <BoardOption linkTo="board-1" boardName="Board 1" />
        <BoardOption linkTo="board-2" boardName="Board 2" />
      </div>
    </div>
  );
};

export default Lobby;
