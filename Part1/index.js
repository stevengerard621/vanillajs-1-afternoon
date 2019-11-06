
const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);

  const topLeft = board[0];
  const topMid = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleMid = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomMid = board[7];
  const bottomRight = board[8];

  
  if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} is the king`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleMid && middleLeft === middleRight) {
    alert(`${middleLeft} is the gangster pew pew`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomMid && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the best`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is better than the loser`);
    return;
  }
  if (topMid !== undefined && topMid === middleMid && topMid === bottomMid) {
    alert(`${topMid} is going to be successful in life $$$`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is dialed`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleMid && topLeft === bottomRight) {
    alert(`${topLeft} is a crusher`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleMid && bottomLeft === topRight) {
    alert(`${bottomLeft} is a natural!`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, seriously, do better");
  }
}