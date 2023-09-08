import  { Component } from 'react';


function rand(max) {
    return Math.floor(Math.random() * max);
  }


  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
 


class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mazeMap: [],
      width: props.width,
      height: props.height,
      startCoord: {},
      endCoord: {},
      dirs: ['n', 's', 'e', 'w'],
      modDir: {
        n: { y: -1, x: 0, o: 's' },
        s: { y: 1, x: 0, o: 'n' },
        e: { y: 0, x: 1, o: 'w' },
        w: { y: 0, x: -1, o: 'e' },
      },
    };
  }

  componentDidMount() {
    this.genMap();
    this.defineStartEnd();
    this.defineMaze();
  }

  map = () => {
    return this.state.mazeMap;
  };

  startCoord = () => {
    return this.state.startCoord;
  };

  endCoord = () => {
    return this.state.endCoord;
  };

  rand = (max) => {
    return Math.floor(Math.random() * max);
  };

  shuffle = (a) => {
    // Shuffle array a in-place
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  displayVictoryMess = (moves) => {
    this.props.displayVictoryMess(moves);
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

  genMap = () => {
    const { width, height } = this.state;
    const mazeMap = new Array(height);

    for (let y = 0; y < height; y++) {
      mazeMap[y] = new Array(width);
      for (let x = 0; x < width; x++) {
        mazeMap[y][x] = {
          n: false,
          s: false,
          e: false,
          w: false,
          visited: false,
          priorPos: null,
        };
      }
    }

    this.setState({ mazeMap });
  };

  defineMaze() {
    let isComp = false;
    let move = false;
    let cellsVisited = 1;
    let numLoops = 0;
    let maxLoops = 0;
    let pos = {
      x: 0,
      y: 0
    };
    const numCells = this.width * this.height;

    while (!isComp) {
      move = false;
      this.mazeMap[pos.x][pos.y].visited = true;

      if (numLoops >= maxLoops) {
        shuffle(this.dirs);
        maxLoops = Math.round(rand(this.height / 8));
        numLoops = 0;
      }
      numLoops++;

      for (let index = 0; index < this.dirs.length; index++) {
        const direction = this.dirs[index];
        const nx = pos.x + this.modDir[direction].x;
        const ny = pos.y + this.modDir[direction].y;

        if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
          if (!this.mazeMap[nx][ny].visited) {
            this.mazeMap[pos.x][pos.y][direction] = true;
            this.mazeMap[nx][ny][this.modDir[direction].o] = true;
            this.mazeMap[nx][ny].priorPos = pos;
            pos = {
              x: nx,
              y: ny
            };
            cellsVisited++;
            move = true;
            break;
          }
        }
      }

      if (!move) {
        pos = this.mazeMap[pos.x][pos.y].priorPos;
      }
      if (numCells === cellsVisited) {
        isComp = true;
      }
    }
  }

  defineStartEnd() {
    switch (rand(4)) {
      case 0:
        this.startCoord = {
          x: 0,
          y: 0
        };
        this.endCoord = {
          x: this.height - 1,
          y: this.width - 1
        };
        break;
      case 1:
        this.startCoord = {
          x: 0,
          y: this.width - 1
        };
        this.endCoord = {
          x: this.height - 1,
          y: 0
        };
        break;
      case 2:
        this.startCoord = {
          x: this.height - 1,
          y: 0
        };
        this.endCoord = {
          x: 0,
          y: this.width - 1
        };
        break;
      case 3:
        this.startCoord = {
          x: this.height - 1,
          y: this.width - 1
        };
        this.endCoord = {
          x: 0,
          y: 0
        };
        break;
      default:
        break;
    }
  }

  // render() {
  //   return <div>Maze Component</div>;
  // }
}

export default Maze;
