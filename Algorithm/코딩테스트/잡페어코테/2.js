function solution(bishops) {
  const ground = [];
  let safe = 0;

  for (let i = 0; i < 8; i++) {
    ground[i] = [0, 0, 0, 0, 0, 0, 0, 0];
  }

  function leftUp(newY, newX) {
    if ((newY < 0 || newY > 7) || (newX < 0 || newX > 7)) return;

    if (ground[newY][newX] !== 1) {
      ground[newY][newX] = 1;
    }
    leftUp(newY - 1, newX - 1);
  }

  function rightUp(newY, newX) {
    if ((newY < 0 || newY > 7) || (newX < 0 || newX > 7)) return;

    if (ground[newY][newX] !== 1) {
      ground[newY][newX] = 1;
    }
    rightUp(newY - 1, newX + 1);
  }


  function leftDown(newY, newX) {
    if ((newY < 0 || newY > 7) || (newX < 0 || newX > 7)) return;

    if (ground[newY][newX] !== 1) {
      ground[newY][newX] = 1;
    }

    leftDown(newY + 1, newX - 1)
  }

  function rightDown(newY, newX) {
    if ((newY < 0 || newY > 7) || (newX < 0 || newX > 7)) return;

    if (ground[newY][newX] !== 1) {
      ground[newY][newX] = 1;
    }
    rightDown(newY + 1, newX + 1);
  }

  function runBishop(y, x) {
    leftUp(y - 1, x - 1);
    leftDown(y + 1, x - 1);
    rightUp(y - 1, x + 1);
    rightDown(y + 1, x + 1);
  }

  for (let i = 0; i < bishops.length; i++) {
    const bishop = bishops[i];
    const x = bishop.charCodeAt(0) - 65;
    const y = 8 - (+bishop.split('')[1]);

    ground[y][x] = 1;
    runBishop(y, x);
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (ground[i][j] !== 1) safe += 1;
    }
  }

  return safe;
}


console.log(solution(['D5']) === 50)
console.log(solution(['D5', 'E8', 'G2']) === 42)