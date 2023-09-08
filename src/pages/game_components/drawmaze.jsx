import  { Component } from 'react';
import Maze from './maze';

class DrawMaze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: [],
      cellSize: props.cellSize,
      drawEndMethod: null,
    };
  }
  componentDidMount() {
    const { maze } = this.props;
    const map = maze.map();
    this.setState({ map, drawEndMethod: this.drawEndSprite });
  }

  redrawMaze = (size) => {
    this.setState({ cellSize: size });
    this.drawMap();
    this.state.drawEndMethod();
  };

  drawCell = (xCord, yCord, cell) => {
    const x = xCord * this.state.cellSize;
    const y = yCord * this.state.cellSize;
    const ctx = this.props.ctx;

    if (!cell.n) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + this.state.cellSize, y);
      ctx.stroke();
    }
    if (!cell.s) {
      ctx.beginPath();
      ctx.moveTo(x, y + this.state.cellSize);
      ctx.lineTo(x + this.state.cellSize, y + this.state.cellSize);
      ctx.stroke();
    }
    if (!cell.e) {
      ctx.beginPath();
      ctx.moveTo(x + this.state.cellSize, y);
      ctx.lineTo(x + this.state.cellSize, y + this.state.cellSize);
      ctx.stroke();
    }
    if (!cell.w) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + this.state.cellSize);
      ctx.stroke();
    }
  };

  drawMap = () => {
    const { map } = this.state;

    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[x].length; y++) {
        this.drawCell(x, y, map[x][y]);
      }
    }
  };

  drawEndSprite = () => {
    const offsetLeft = this.cellSize / 50;
    const offsetRight = this.cellSize / 25;
    const coord = Maze.endCoord();

    this.ctx.drawImage(
      this.endSprite,
      2,
      2,
      this.endSprite.width,
      this.endSprite.height,
      coord.x * this.cellSize + offsetLeft,
      coord.y * this.cellSize + offsetLeft,
      this.cellSize - offsetRight,
      this.cellSize - offsetRight
    );
  };

  clear = () => {
    const canvasSize = this.state.cellSize * this.state.map.length;
    this.props.ctx.clearRect(0, 0, canvasSize, canvasSize);
  };

  // render() {
  //   return <div>DrawMaze Component</div>;
  // }
}

export default DrawMaze;
