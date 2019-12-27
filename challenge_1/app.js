//view

  //render 2 main elements
class Render {
  //score and players
  static players(p1, p2) {

  }
  //the board
  static board(matrix) {
    var board = document.createElement("div");

    matrix.forEach((row)=>{


      var rowHolder = document.createElement("div");
      rowHolder.className = "row"

      row.forEach((element)=> {


        var e = document.createElement("div");
        e.className = "box"
        if(element)
          e.append(element==1? "X" : "O")
        rowHolder.append(e)

      })

      board.append(rowHolder)

    })

    board.className = "board"
    var div = document.getElementById("board");
    div.html = "";
    div.append(board)

  }


}











//controller

  //handle clicks
    //check for winning condition

  //handle turns
    //update score of winner


//model



//keep track of board score

//Class board handles keeping track of the board, updating it and checking for winning condition
class Board {

  //constructor, takes either a premade board or creates an empty one
  constructor(rows) {
    this._rows = rows || [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
  }

  //update method, empty spot is 0, player spots are either 1 or two, returns true if spot is empty and false if occupied
  update(row, col, player) {
    var matrix = this.rows();
    if(!matrix[row][col]) {
      matrix[row][col] = player;
      return true
    }
    return false;
  }

  //checks for winning condition after a specific play, on columns, rows, and major and minor diagonals
  check(row, col, player) {

    var matrix = this.rows();

    const major = row - col;
    const minor = row + col;

    var counters = {
      col: 0,
      row: 0,
      maj: 0,
      min: 0
    }

    for(var i = 0; i<3; i++) {
      if(matrix[row][i]===player)
        counters["row"]++;
      if(matrix[i][col]===player)
        counters["col"]++;
      if(matrix[i][i+major]===player)
        counters["maj"]++;
      if(matrix[i][minor-i]===player)
        counters["min"]++;
    }

    for(var i in counters){
      if (counters[i]>2)
        return true;
    }
    return false;

  }

  rows() {
    return this._rows;
  }

}


  //keep track of players

  //Player class, takes name, and keeps track of player score;
  class Player {
    constructor(name) {
      this._name = name;
      this._score = 0;
    }

    name() {
      return this._name;
    }

    score() {
      return this._score
    }

    won() {
      this._score++;
    }
  }