var turn="X";
var squares= document.getElementsByClassName('square');

//starts game
startGame();
function startGame(){
  setMessage(turn+"\'s turn");
}

//notify's whose turn it is 
function setMessage (msg){
  document.getElementById("message").innerHTML=msg;
}

//sets square and checks if square taken
function nextMove(square){
  if (square.innerHTML ===""){
    square.innerHTML=turn;
    switchTurn();
  }
  else {
    alert("Please choose another box");
  }
}

//switches players turn
function switchTurn(){
  getSquare();

  if (turn =="X"){
    turn="O";
  }
  else{
    turn="X";
  }
  setMessage(turn+"\'s turn")
}

//records input and checks for winner
function getSquare() {
  for (var i=0; i < squares.length; i++){
    squares[i].addEventListener('click', getWinner())
  }
}

//get winner function still not working 
function getWinner() {
console.log ("winner");
//checks for X win
    if(((squares[0].innerHTML === "X") && (squares[1].innerHTML === "X") && (squares[2].innerHTML === "X")) ||
       ((squares[3].innerHTML === "X") && (squares[4].innerHTML === "X") && (squares[5].innerHTML === "X")) ||
       ((squares[6].innerHTML === "X") && (squares[7].innerHTML === "X") && (squares[8].innerHTML === "X")) ||
       ((squares[0].innerHTML === "X") && (squares[3].innerHTML === "X") && (squares[6].innerHTML === "X")) ||
       ((squares[1].innerHTML === "X") && (squares[4].innerHTML === "X") && (squares[7].innerHTML === "X")) ||
       ((squares[2].innerHTML === "X") && (squares[5].innerHTML === "X") && (squares[8].innerHTML === "X")) ||
       ((squares[0].innerHTML === "X") && (squares[4].innerHTML === "X") && (squares[8].innerHTML === "X")) ||
       ((squares[2].innerHTML === "X") && (squares[4].innerHTML === "X") && (squares[6].innerHTML === "X")))
    {
        alert(turn+" wins!");
//resets board
        for (var i=0; i < squares.length; i++){
        squares[i].innerHTML="";
        }
        return;        
    }
//checks for O win
    else if(((squares[0].innerHTML === "O") && (squares[1].innerHTML === "O") && (squares[2].innerHTML === "O")) ||
       ((squares[3].innerHTML === "O") && (squares[4].innerHTML === "O") && (squares[5].innerHTML === "O")) ||
       ((squares[6].innerHTML === "O") && (squares[7].innerHTML === "O") && (squares[8].innerHTML === "O")) ||
       ((squares[0].innerHTML === "O") && (squares[3].innerHTML === "O") && (squares[6].innerHTML === "O")) ||
       ((squares[1].innerHTML === "O") && (squares[4].innerHTML === "O") && (squares[7].innerHTML === "O")) ||
       ((squares[2].innerHTML === "O") && (squares[5].innerHTML === "O") && (squares[8].innerHTML === "O")) ||
       ((squares[0].innerHTML === "O") && (squares[4].innerHTML === "O") && (squares[8].innerHTML === "O")) ||
       ((squares[2].innerHTML === "O") && (squares[4].innerHTML === "O") && (squares[6].innerHTML === "O")))
      {alert(turn+" wins!")
//resets board
        for (var i=0; i < squares.length; i++){
        squares[i].innerHTML="";
        }
        return;
      }
//checks for tie
    else if (
      (squares[0].innerHTML != "") && (squares[1].innerHTML != "") && (squares[2].innerHTML != "") &&
      (squares[3].innerHTML != "") && (squares[4].innerHTML != "") && (squares[5].innerHTML != "") &&
      (squares[6].innerHTML != "") && (squares[7].innerHTML != "") && (squares[8].innerHTML != "") )
      {alert("nobody wins") 
//resets board
        for (var i=0; i < squares.length; i++){
        squares[i].innerHTML="";
        }
        return;
      }

}
