// YOUR CODE BELOW

//#8 3/12/2020
const ticTacToe = {
  board: [[null, null, null],
         [null, null, null],
         [null, null, null]],
  move: function(x, rowNum, colNum){
    console.log(this.board)
    if(this.board[rowNum][colNum] === null){
    this.board[rowNum][colNum] = x
    }
   return this.board
  },
 
  clear: function(){
    return   this.board = [[null, null, null],
         [null, null, null],
         [null, null, null]]
  }
}

//#7 2/13/2020
const ticTacToe = {
board:  [
  [null, null, null],
  [null, null, null],
  [null, null, null]
],

move: function (x, row, col){
if(!this.board[row][col]){
  this.board[row][col] = x
}
return this.board
},

clear: function(){
 this.board =  [
  [null, null, null],
  [null, null, null],
  [null, null, null]
],
}
}


// #6
const ticTacToe = { 
  board: [
         [null, null, null], //row 0
         [null, null, null], //row 1
         [null, null, null], //row 2
       //col 0,   1,     2
         ],
 move: function(char, row, col){
   if(!this.board[row][col]){
    this.board[row][col] = char;
   }
   console.log(this.board);
   return this.board;
   
 },
   clear: function(){
     this.board = 
       [
      [null, null, null],
      [null, null, null],
      [null, null, null],
     ],
     console.log(this.board)
     return this.board
   }
   }
 

// #5
const ticTacToe = { 
  board: [
         [null, null, null], //row[0]
          //0     1    2
         [null, null, null], //row[1]
         [null, null, null], //row[2]
         ],
  
  move: function(char, row, col){
    for(let i = 0; i < row.length; i++){
      let eachRow = row[i];
      let char = eachRow[col]
      return this.board
    }
  },
    clear: function(){
        
    }
}



//#4
const ticTacToe = {
  
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    move: function(char, row, col){
      if(!this.board[row][col]){
        this.board[row][col]=char;
      }
      console.log(this.board)
      return this.board;
    },
    clear: function(){
      this.board =  [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
       console.log(this.board)
      return this.board;
    }
  }
//#3 1:41-1:45 4mins
const ticTacToe = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    move: function(char, row, col) {
      if(!this.board[row][col]){
        this.board[row][col]=char
        
      }
      console.log(this.board)
      return this.board
    },
    clear: function(){
      this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
        console.log(this.board)
      return this.board;
    }
  }
  


//#2 1:36-1:41 5mins
const ticTacToe = { 
    board:[[null, null, null],
          [null, null, null],
          [null, null, null],
          ],     
    move: function(char, row, col){
        if(!this.board[row][col]){
          this.board[row][col]=char
        }
        console.log(this.board)
        return this.board
      },
     clear: function(){
        this.board = 
          [
          [null, null, null],
          [null, null, null],
          [null, null, null],
          ],
          console.log(this.board)
          return  this.board
      },  
    }
    




//#1   1:06-1:36 30mins
const ticTacToe  = { 

    board: [
      [null, null, null],//row0
      [null, null, null],
      [null, null, null],
    ],
    move: function(char, row, col){
      
      if(!this.board[row][col]){ //check if char exist
      this.board[row][col] = char //place character 'x' in the right spot
      }
      console.log(this.board);
      return this.board;  // return this board! very important. RETURN the board not move.
    },
      clear: function(){
        this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
      console.log(this.board);
      return this.board;
      }
  }
  

  