import { Player } from "../players/player";

export class Board {
  _rows: number = 6;
  _columns: number = 7;
  _empty: number = 0;
  _red: number = 1;
  _black: number = 2;
  _players: Array<Player> = [];
  _currentPlayer: Player;
  _board: any;

  constructor() {
    this.createNewGrid();
    this.createPlayers();
    this.chooseRandomStartingPlayer();
  }

  createNewGrid() {
    this._board = Array(this._rows)
      .fill(null)
      .map(() => Array(this._columns).fill(this._empty));
  }

  createPlayers(){
    this._players.push(new Player("red"));
    this._players.push(new Player("black"));
  }

  chooseRandomStartingPlayer() {
    let rand = Math.floor(Math.random() * 2) + 1;
    this._players.forEach((player) => {
        if(player._number == rand)
            this._currentPlayer = player;
    })
  }

  getCurrentPlayer(player: Player) {
    return player._color;
  }

  getAvailableMovies() {
    let movesArray = [];
    if (this.getWinner() == this._empty)
      for (let c = 0; c < this._columns; c++) {
        if (this._board[0][c] == this._empty) movesArray.push(c);
      }
    return movesArray;
  }

  playMove(move: number) {
    console.log(this.getAvailableMovies());
    if (!this.getAvailableMovies().includes(move))
        return false;
        
    let rowCount = 5;
    for(let r = 0; r < this._rows; r++){
        if(this._board[r][move] != this._empty)
            rowCount--;
    }
    this._board[rowCount][move] = this._currentPlayer._number;
    if(this._currentPlayer._number == this._red) this._currentPlayer._number = this._black;
    else this._currentPlayer._number = this._red;
    
    return true;
}
  

  getWinner() {
    for (let r = 0; r < this._rows; r++) {
      for (let c = 0; c < this._columns; c++) {
        if (this._board[r][c] != this._empty) {
          if (c < 4) {
            if (
              this._board[r][c] == this._board[r][c + 1] &&
              this._board[r][c] == this._board[r][c + 2] &&
              this._board[r][c] == this._board[r][c + 3]
            )
              return this._board[r][c];
            if (r < 3) {
              if (
                this._board[r][c] == this._board[r + 1][c + 1] &&
                this._board[r][c] == this._board[r + 2][c + 2] &&
                this._board[r][c] == this._board[r + 3][c + 3]
              )
                return this._board[r][c];
            }
          }
          if (r < 3) {
            if (
              this._board[r][c] == this._board[r + 1][c] &&
              this._board[r][c] == this._board[r + 2][c] &&
              this._board[r][c] == this._board[r + 3][c]
            )
              return this._board[r][c];
            if (c > 2) {
              if (
                this._board[r][c] == this._board[r + 1][c - 1] &&
                this._board[r][c] == this._board[r + 2][c - 2] &&
                this._board[r][c] == this._board[r + 3][c - 3]
              )
                return this._board[r][c];
            }
          }
        }
      }
    }
    return this._empty;
  }

  get rows(): number {
    return this._rows;
  }

  get board(): any {
    return this._board;
  }
}
