import { Player } from "../players/player";

export class Board {
  _rows: number = 6;
  _columns: number = 7;
  _empty: number = 0;
  _red: number = 1;
  _black: number = 2;
  _players: Array<Player> = [];
  _currentPlayer: Player;
  _winner: any = null;
  _board: any;
  _lastMove: any = -1;

  constructor(playerOne: Player, playerTwo: Player) {
    this.createNewGrid();
    this._players.push(playerOne,playerTwo)
    this.chooseRandomStartingPlayer();
  }

  // clone() {
  //   let clone = new Board(this._players[0], this._players[1]);
  //   clone._currentPlayer = this._currentPlayer;
  //   clone._winner = this._winner;
  //   clone._board = Object.create(this._board);
  //   clone._lastMove = this._lastMove; 
  //   return clone;
  // }
  createNewGrid() {
    this._board = Array(this._rows)
      .fill(null)
      .map(() => Array(this._columns).fill(this._empty));
  }

  chooseRandomStartingPlayer() {
    let rand = Math.floor(Math.random() * 2) + 1;
    this._players.forEach((player) => {
        if(player._number == 1)
            this._currentPlayer = player;
    })
  }

  reset() {
    this.createNewGrid();
    this._winner = null;
    this.chooseRandomStartingPlayer();
  }

  getAvailableMoves() {
    let movesArray = [];
      for (let c = 0; c < this._columns; c++) {
        if (this._board[0][c] == this._empty) movesArray.push(c);
      }
    return movesArray;
  }

  randomMove() {
    let moves = this.getAvailableMoves();
    let rand = Math.floor(Math.random() * moves.length) + 1;
    this.playMove(moves[rand]);
  }

  playMove(move: number) {
    if (!this.getAvailableMoves().includes(move))
        return false;
        
    for(let r = this._rows-1; r >= 0; r--){
      if(this._board[r][move] == this._empty){
        this._board[r][move] = this._currentPlayer._number;
        this._currentPlayer = this.nextPlayer();
        
        let winner =  this.getWinner();
        if(this.getAvailableMoves().length == 0)
          this._winner = winner;
        if(winner != 0)
          this._winner = winner;

        this._lastMove = move;
        return true;
      }
    }
  }
  
  undoMove() {
    for(let r = this._rows-1; r >= 0; r--){
      if(this._board[r][this._lastMove] != this._empty)
        this._board[r][this._lastMove] = this._empty;
    }
    this._currentPlayer = this.nextPlayer();
  }

  nextPlayer(){
    let nextPlayer = null;
    this._players.forEach((player) => {
      if(player != this._currentPlayer)
        nextPlayer = player;
    })
    return nextPlayer;
  }

  getPlayerByNumber(value) {
    if(value == this._empty)
      return this._empty;
    let player = null;
    this._players.forEach((p) => {
      if(p._number == value)
        player = p;
    })
    return player;
  }

  getWinner() {
    for (let r = 0; r < this._rows; r++) { // iterate rows, bottom to top
        for (let c = 0; c < this._columns; c++) { // iterate columns, left to right
            let player = this.board[r][c];
            if (player == this._empty)
                continue; // don't check empty slots

            if (c + 3 < this._columns &&
                player == this.board[r][c+1] && // look right
                player == this.board[r][c+2] &&
                player == this.board[r][c+3])
                return this.getPlayerByNumber(player);
            if (r + 3 < this._rows) {
                if (player == this.board[r+1][c] && // look up
                    player == this.board[r+2][c] &&
                    player == this.board[r+3][c])
                    return this.getPlayerByNumber(player);
                if (c + 3 < this._columns &&
                    player == this.board[r+1][c+1] && // look up & right
                    player == this.board[r+2][c+2] &&
                    player == this.board[r+3][c+3])
                    return this.getPlayerByNumber(player);
                if (c - 3 >= 0 &&
                    player == this.board[r+1][c-1] && // look up & left
                    player == this.board[r+2][c-2] &&
                    player == this.board[r+3][c-3])
                    return this.getPlayerByNumber(player);
            }
        }
    }
    return this._empty;
  }

  getWinningMove(playerId) {
    for (let r = 0; r < this._rows; r++) { // iterate rows, bottom to top
        for (let c = 0; c < this._columns; c++) { // iterate columns, left to right
            let player = playerId;
            if ( this.board[r][c] == this._empty){
              if(r != this._rows-1){
                if( this.board[r+1][c] == this._empty)
                  continue;
              }
            
              if (c + 3 < this._columns &&
                player == this.board[r][c+1] && // look right
                player == this.board[r][c+2] &&
                player == this.board[r][c+3])
                return c;
              if (c - 3 > 0 &&
                player == this.board[r][c-1] && // look left
                player == this.board[r][c-2] &&
                player == this.board[r][c-3])
                return c;
              if (r + 3 < this._rows) {
                if (player == this.board[r+1][c] && // look up
                    player == this.board[r+2][c] &&
                    player == this.board[r+3][c])
                    return c;
                if (c + 3 < this._columns &&
                    player == this.board[r+1][c+1] && // look up & right
                    player == this.board[r+2][c+2] &&
                    player == this.board[r+3][c+3])
                    return c;
                if (c - 3 >= 0 &&
                    player == this.board[r+1][c-1] && // look up & left
                    player == this.board[r+2][c-2] &&
                    player == this.board[r+3][c-3])
                    return c;
            }
        }
        // if ( this.board[r][c] == playerId){          
        //   if (r - 3 >= 0) {
        //       if (c - 3 >= 0 &&
        //           player == this.board[r-1][c-1] && // look down & left
        //           player == this.board[r-2][c-2] &&
        //           this._empty == this.board[r-3][c-3])
        //           return c;
            
        //       if (c + 3 < this._columns &&
        //           player == this.board[r-1][c+1] && // look down & right
        //           player == this.board[r-2][c+2] &&
        //           this._empty == this.board[r-3][c+3])
        //           return c;
              
        //   }
        // }
      }
    }
    return -1;
  }

  get rows(): number {
    return this._rows;
  }

  get columns(): number {
    return this._columns;
  }

  get board(): any {
    return this._board;
  }

  get winner(): string {
    return this._winner;
  }

  get currentPlayer(): Player {
    return this._currentPlayer;
  }

  get players(): Array<Player> {
    return this._players;
  }

  get lastMove(): number {
    return this._lastMove;
  }
}
