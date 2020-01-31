import React, { useRef, useEffect, useState } from "react";
import "./boardCanvas.scss";

const BoardCanvas = () => {
  const canvasEl = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const draw = e => {
    if (isDrawing) {
      const canvas = canvasEl.current;
      const boundingRect = canvas.getBoundingClientRect();
      console.log(e.clientY - boundingRect.top);
      console.log(e.clientX - boundingRect.left);
    }
  };

  useEffect(() => {
    const canvas = canvasEl.current;
    setCtx(canvas.getContext("2d"));
  }, [canvasEl]);

  return (
    <canvas
      className="board-canvas"
      height="400"
      width="350"
      ref={canvasEl}
      onPointerDown={() => setIsDrawing(true)}
      onPointerUp={() => setIsDrawing(false)}
      onPointerLeave={() => setIsDrawing(false)}
      onPointerMove={e => draw(e)}
    ></canvas>
  );
};

export default BoardCanvas;
