import React, { useRef, useEffect } from 'react';
import Canvas from './Canvas';
import Maze from './game_components/maze';
import DrawMaze from './game_components/drawmaze';
import Player from './game_components/player';
import "./style.css";

function Game2() {
  const sprite = new Image(); // Define your sprite here
  const finishSprite = new Image(); // Define your finishSprite here

  const displayVictoryMess = (moves) => {
    document.getElementById("moves").innerHTML = "You Moved " + moves + " Steps.";
    toggleVisibility("Message-Container");  
  };

  const toggleVisibility = (id) => {
    if (document.getElementById(id).style.visibility === "visible") {
      document.getElementById(id).style.visibility = "hidden";
    } else {
      document.getElementById(id).style.visibility = "visible";
    }
  }

  // Create refs using the useRef hook
  const viewRef = useRef(null);
  const mazeContainerRef = useRef(null); // Define the mazeContainerRef
  const mazeCanvasRef = useRef(null); // Define the mazeCanvasRef

  const cellSize = 30; // Define your cell size

  // Declare the 'maze' variable outside of useEffect
  const maze = new Maze(11, 11);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Access the refs' current values here
    const mazeContainer = mazeContainerRef.current; // Access mazeContainerRef

    // Initialize the maze, DrawMaze, and Player components
    const drawMaze = new DrawMaze(maze, ctx, cellSize, finishSprite);
    const player = new Player(maze, mazeCanvasRef.current, cellSize, displayVictoryMess, sprite, finishSprite, viewRef.current);


    if (mazeContainer.style.opacity < "100") {
      mazeContainer.style.opacity = "100";
    }
  };

  const initMaze = () => {
    // Access the refs' current values here
    const mazeCanvas = mazeCanvasRef.current;
    const ctx = mazeCanvas.getContext("2d");

    // Initialize the maze, DrawMaze, and Player components
    const drawMaze = new DrawMaze(maze, ctx, cellSize, finishSprite);
    const player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite, finishSprite);

    if (mazeCanvas.style.opacity < "100") {
      mazeCanvas.style.opacity = "100";
    }
  };

  useEffect(() => {
    // Access the refs' current values here
    const view = viewRef.current;
    const mazeContainer = mazeContainerRef.current; // Access mazeContainerRef
    const mazeCanvas = mazeCanvasRef.current;
    const ctx = mazeCanvas.getContext("2d");

    if (mazeContainer.style.opacity < "100") {
      mazeContainer.style.opacity = "100";
    }
  }, []);

  return (
    <div>
      <Canvas
        draw={(ctx) => draw(ctx)}
        sprite={sprite}
      />

      {/* HTML content */}
      <div id="page">
        <div id="Message-Container">
          {/* ... */}
        </div>

        <br />
        <div id="menu">
          <input
            id="startMazeBtn"
            type="button"
            onClick={initMaze}
            value="Start"
          />
        </div>

        <div id="view" ref={viewRef}>
          <div id="mazeContainer" ref={mazeContainerRef}> {/* Add ref to mazeContainer */}
            <canvas
              id="mazeCanvas"
              className="border"
              height="900"
              width="900"
              ref={mazeCanvasRef} // Add ref to mazeCanvas
            ></canvas>
          </div>
        </div>

        {/* ... */}
      </div>
      <Player 
      maze={maze} 
      cellSize={cellSize} 
      onComplete={displayVictoryMess} 
      sprite={sprite} 
      finishSprite={finishSprite}
      view={viewRef.current}
       />
    </div>
  );
}

export default Game2;
