import React from "react";
import BoardOption from "../../components/board-option/boardOption";
import "./lobby.scss";

const Lobby = ({ directory }) => {
  return (
    <div className="card p10">
      <h2 className="card-title">Choose a Board</h2>
      <div>
        <BoardOption isNew linkTo="/new-board" boardName="Create New Board" />
        {directory.map(b => (
          <BoardOption
            linkTo={`/board/${b.slug}`}
            boardName={b.name}
            key={b.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Lobby;
