"use strict";
/*Internally keeps track of game status*/
const Gameboard = (() => {
  let boardStatus = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  let turn = 1;

  let checkWin = () => {
    //horizontal conditions
    let winLoseDrawCondition = "";
    let winningPlayer = "";
    if(boardStatus[0] !== undefined && boardStatus[0] == boardStatus[1] && boardStatus[0] == boardStatus[2]){
      winLoseDrawCondition = "h1";
      winningPlayer = boardStatus[0];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    if(boardStatus[3] !== undefined && boardStatus[3] == boardStatus[4] && boardStatus[3] == boardStatus[5]){
      winLoseDrawCondition = "h2";
      winningPlayer = boardStatus[3];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    if(boardStatus[6] !== undefined && boardStatus[6] == boardStatus[7] && boardStatus[6] == boardStatus[8]){
      winLoseDrawCondition = "h1";
      winningPlayer = boardStatus[6];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }

    //vertical conditions
    if(boardStatus[0] !== undefined && boardStatus[0] == boardStatus[3] && boardStatus[0] == boardStatus[6]){
      winLoseDrawCondition = "v1";
      winningPlayer = boardStatus[0];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    if(boardStatus[1] !== undefined && boardStatus[1] == boardStatus[4] && boardStatus[1] == boardStatus[7]){
      winLoseDrawCondition = "v2";
      winningPlayer = boardStatus[1];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    if(boardStatus[2] !== undefined && boardStatus[2] == boardStatus[5] && boardStatus[2] == boardStatus[8]){
      winLoseDrawCondition = "v3";
      winningPlayer = boardStatus[2];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }

    //cross conditions
    if(boardStatus[0] !== undefined && boardStatus[0] == boardStatus[4] && boardStatus[0] == boardStatus[8]){
      winLoseDrawCondition = "top left diagonal";
      winningPlayer = boardStatus[0];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    if(boardStatus[2] !== undefined && boardStatus[2] == boardStatus[4] && boardStatus[2] == boardStatus[6]){
      winLoseDrawCondition = "top right diagonal";
      winningPlayer = boardStatus[2];
      return {
        winLoseDrawCondition,
        winningPlayer
      };
    }
    console.log(turn);
    return false
  }

  return{
    turn,
    boardStatus,
    checkWin
  }
})();

/*html display logics handled here*/
const Controller = (() => {
  const startBtn = document.querySelector('#start-btn');
  startBtn.addEventListener('click', () => {
    console.log('startbtn clicked');
  })

  //controlling click events of clicking the board
    //in the event listener of boardfield, check whose turn it is (stored in the turn counter variable)
  //if x, change textcontent to x
  //if o, change textcontent to o
  //if aleady has a sign placement, do nothing
  //if textcontent added, +1 to turn counter
  const boardField = [...document.querySelectorAll('.gameboard-field')];
  for(let i = 0; i < boardField.length; i++){
    boardField[i].addEventListener('click', () => {
      if(boardField[i].textContent == ""){
        if(Gameboard.turn % 2 == 0 && Gameboard.turn <= 9){
          document.querySelector('#player-turn-display').textContent = "Player O's Turn";
          boardField[i].textContent = "o";
          Gameboard.turn += 1;
          Gameboard.boardStatus[i] = "0";
        }
        else if(Gameboard.turn % 2 != 0 && Gameboard.turn <= 9){
          document.querySelector('#player-turn-display').textContent = "Player X's Turn";
          boardField[i].textContent = "x";
          Gameboard.turn += 1;
          Gameboard.boardStatus[i] = "x";
        }
      }

      if(Gameboard.turn < 10){
        if(Gameboard.checkWin()){
          document.querySelector('#announcement').style.display = 'flex';
          document.querySelector('#announcement').style.zIndex = '10';
          document.querySelector('#announcement-winner').textContent = `The winner is Player ${Gameboard.checkWin().winningPlayer}`;
        }
      }
      else{
        document.querySelector('#announcement').style.display = 'flex';
        document.querySelector('#announcement').style.zIndex = '10';
        document.querySelector('#announcement-winner').textContent = 'Its a draw!';
      }
    })
  }


})();

const player = (xOro, humanOrBot) => {
  const symbol = xOro;
  const type = humanOrBot;
  return{
    symbol,
    type
  }  
};
