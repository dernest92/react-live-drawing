import React from "react";
import { useParams } from "react-router-dom";

const Drawing = () => {
  const { boardId } = useParams();
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{boardId}</h2>
      </div>
    </div>
  );
};

export default Drawing;
