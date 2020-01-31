import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardCanvas from "../../components/board-canvas/boardCanvas";
import "./drawing.scss";

const Drawing = ({ directory }) => {
  const { slug } = useParams();
  const [name, setName] = useState();
  useEffect(() => {
    const name = directory.find(b => b.slug === slug)?.name;
    setName(name);
  }, [directory, slug]);
  return (
    <div className="card drawing-card">
      <h2 className="card-title">{name}</h2>
      <BoardCanvas />
    </div>
  );
};

export default Drawing;
