import React, { Component } from 'react';
// import './App.css';
import Maze from './game_components/maze'
import DrawMaze from './game_components/drawmaze'
import Player from './game_components/player'


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mazeCanvas: null,
      sprite: new Image(),
      finishSprite: new Image(),
      maze: null,
      draw: null,
      player: null,
      cellSize: null,
      difficulty: 11,
    };
  }

  componentDidMount() {
    this.initMaze();
  }

  initMaze = () => {
    const { mazeCanvas, sprite, finishSprite, difficulty } = this.state;

    if (mazeCanvas) {
      this.playerUnbindKeyDown();
      this.setState({ mazeCanvas: null, player: null });
    }

    sprite.src = './mouse.png?' + new Date().getTime();
    sprite.setAttribute('crossOrigin', 'anonymous');
    sprite.onload = () => {
      finishSprite.src = './cheese.png?' + new Date().getTime();
      finishSprite.setAttribute('crossOrigin', 'anonymous');
      finishSprite.onload = () => {
        const cellSize = mazeCanvas.width / difficulty;
        const maze = new Maze(difficulty, difficulty);
        const draw = new DrawMaze(maze, this.ctx, cellSize, finishSprite);
        const player = new Player(maze, mazeCanvas, cellSize, this.displayVictoryMess, sprite);
        this.setState({ maze, draw, player, cellSize });
        if (this.mazeContainer.style.opacity < '100') {
          this.mazeContainer.style.opacity = '100';
        }
      };
    };
  };

  displayVictoryMess = (moves) => {
    this.moves.innerHTML = 'You Moved ' + moves + ' Steps.';
    this.toggleVisibility('Message-Container');
  };

  toggleVisibility = (id) => {
    const element = document.getElementById(id);
    if (element.style.visibility === 'visible') {
      element.style.visibility = 'hidden';
    } else {
      element.style.visibility = 'visible';
    }
  };

  playerUnbindKeyDown = () => {
    window.removeEventListener('keydown', this.check, false);
    this.view.removeEventListener('swipe', this.swipeHandler);
  };

  playerBindKeyDown = () => {
    window.addEventListener('keydown', this.check, false);
    this.view.addEventListener('swipe', this.swipeHandler);
  };

  check = (e) => {
    const { maze, player} = this.state;
    const cell = maze.map()[player.cellCoords.x][player.cellCoords.y];

    switch (e.keyCode) {
      case 65:
      case 37: // west
        if (cell.w === true) {
          player.removeSprite(player.cellCoords);
          player.cellCoords = {
            x: player.cellCoords.x - 1,
            y: player.cellCoords.y,
          };
          player.drawSprite(player.cellCoords);
        }
        break;
      case 87:
      case 38: // north
        if (cell.n === true) {
          player.removeSprite(player.cellCoords);
          player.cellCoords = {
            x: player.cellCoords.x,
            y: player.cellCoords.y - 1,
          };
          player.drawSprite(player.cellCoords);
        }
        break;
      case 68:
      case 39: // east
        if (cell.e === true) {
          player.removeSprite(player.cellCoords);
          player.cellCoords = {
            x: player.cellCoords.x + 1,
            y: player.cellCoords.y,
          };
          player.drawSprite(player.cellCoords);
        }
        break;
      case 83:
      case 40: // south
        if (cell.s === true) {
          player.removeSprite(player.cellCoords);
          player.cellCoords = {
            x: player.cellCoords.x,
            y: player.cellCoords.y + 1,
          };
          player.drawSprite(player.cellCoords);
        }
        break;
      default:
        break;
    }
  };

  swipeHandler = (event) => {
    // const { player } = this.state;
    const direction = event.detail.direction;

    switch (direction) {
      case 'up':
        this.check({ keyCode: 38 });
        break;
      case 'down':
        this.check({ keyCode: 40 });
        break;
      case 'left':
        this.check({ keyCode: 37 });
        break;
      case 'right':
        this.check({ keyCode: 39 });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div id="page">
        <div id="Message-Container">
          <div id="message">
            <h1>Congratulations!</h1>
            <p>You are done.</p>
            <p id="moves" ref={(moves) => (this.moves = moves)}></p>
            <input
              id="okBtn"
              type="button"
              onClick={() => this.toggleVisibility('Message-Container')}
              value="Cool!"
            />
          </div>
        </div>

        <br />
        <div id="menu">
          <input
            id="startMazeBtn"
            type="button"
            onClick={this.initMaze}
            value="Start"
          />
        </div>

        <div id="view" ref={(view) => (this.view = view)}>
          <div id="mazeContainer" ref={(mazeContainer) => (this.mazeContainer = mazeContainer)}>
            <canvas
              id="mazeCanvas"
              className="border"
              height="900"
              width="900"
              ref={(canvas) => {
                this.mazeCanvas = canvas;
                this.ctx = canvas.getContext('2d');
              }}
            ></canvas>
          </div>
        </div>

        <p id="instructions">Swipe to grab the cheese!!</p>
      </div>
    );
  }
}

export default Game;
