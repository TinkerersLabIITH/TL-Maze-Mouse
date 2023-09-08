import  { Component } from 'react';


var maze,sprite;


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: null,
      drawSprite: null,
      moves: 0,
      cellCoords: {
        x: props.maze.startCoord().x,
        y: props.maze.startCoord().y,
      },
      cellSize: props.cellSize,
      halfCellSize: props.cellSize / 2,
    };
  }

  componentDidMount() {
    this.initDrawSprite();
    this.playerBindKeyDown();
    this.drawSprite(this.props.maze.startCoord());
  }

  initDrawSprite = () => {
    if (this.props.sprite !== null) {
      this.setState({ drawSprite: this.drawSpriteImg });
    } else {
      this.setState({ drawSprite: this.drawSpriteCircle });
    }
  };

  drawSpriteCircle = (coord) => {
    const x = (coord.x + 1) * this.state.cellSize - this.state.halfCellSize;
    const y = (coord.y + 1) * this.state.cellSize - this.state.halfCellSize;
    const ctx = this.state.ctx;

    ctx.beginPath();
    ctx.arc(x, y, this.state.halfCellSize - 2, 0, 2 * Math.PI);
    if (coord.x === this.props.maze.endCoord().x && coord.y === this.props.maze.endCoord().y) {
      this.props.onComplete(this.state.moves);
      this.playerUnbindKeyDown();
    }
  };

  drawSpriteImg = (coord) => {
    const offsetLeft = this.cellSize / 50;
    const offsetRight = this.cellSize / 25;
    this.ctx.drawImage(
      sprite,
      0,
      0,
      sprite.width,
      sprite.height,
      coord.x * this.cellSize + offsetLeft,
      coord.y * this.cellSize + offsetLeft,
      this.cellSize - offsetRight,
      this.cellSize - offsetRight
    );
    if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
      this.onComplete(this.moves);
      this.unbindKeyDown();
    }
  };

  removeSprite = (coord) => {
    const offsetLeft = this.cellSize / 50;
    const offsetRight = this.cellSize / 25;
    this.ctx.clearRect(
      coord.x * this.cellSize + offsetLeft,
      coord.y * this.cellSize + offsetLeft,
      this.cellSize - offsetRight,
      this.cellSize - offsetRight
    );

  };

  playerUnbindKeyDown = () => {
    window.removeEventListener('keydown', this.check, false);
    this.props.view.removeEventListener('swipe', this.swipeHandler);
  };

  playerBindKeyDown = () => {
    window.addEventListener('keydown', this.check, false);
    this.props.view.addEventListener('swipe', this.swipeHandler);
  };

  check = (e) => {
    const { maze } = this.props;
    const cell = maze.map()[this.state.cellCoords.x][this.state.cellCoords.y];
    const moves = this.state.moves + 1;

    switch (e.keyCode) {
      case 65:
      case 37: // west
        if (cell.w === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x - 1, y: this.state.cellCoords.y },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 87:
      case 38: // north
        if (cell.n === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x, y: this.state.cellCoords.y - 1 },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 68:
      case 39: // east
        if (cell.e === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x + 1, y: this.state.cellCoords.y },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 83:
      case 40: // south
        if (cell.s === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x, y: this.state.cellCoords.y + 1 },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      default:
        break;
    }
  };

  swipeHandler = (event) => {
    const { maze } = this.props;
    const direction = event.detail.direction;
    const cell = maze.map()[this.state.cellCoords.x][this.state.cellCoords.y];
    const moves = this.state.moves + 1;
  
    switch (direction) {
      case 'up':
        if (cell.n === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x, y: this.state.cellCoords.y - 1 },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 'down':
        if (cell.s === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x, y: this.state.cellCoords.y + 1 },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 'left':
        if (cell.w === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x - 1, y: this.state.cellCoords.y },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      case 'right':
        if (cell.e === true) {
          this.removeSprite(this.state.cellCoords);
          this.setState({
            cellCoords: { x: this.state.cellCoords.x + 1, y: this.state.cellCoords.y },
            moves,
          });
          this.state.drawSprite(this.state.cellCoords);
        }
        break;
      default:
        break;
    }
  };
  

//   render() {
//     return <div>Player Component</div>;
//   }
}

export default Player;


