import  { Component } from 'react';
// import Maze from './maze';

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
    const { maze } = this.props.props;
    console.log(maze);
    const map = maze.map();
    console.log(map);
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
    ctx.strokeStyle = "white";
    console.log("strokestyle");
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
    const coord = this.props.maze.endCoord();

    this.props.ctx.drawImage(
      this.props.endSprite,
      2,
      2,
      this.props.endSprite.width,
      this.props.endSprite.height,
      coord.x * this.state.cellSize + offsetLeft,
      coord.y * this.state.cellSize + offsetLeft,
      this.state.cellSize - offsetRight,
      this.state.cellSize - offsetRight
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
