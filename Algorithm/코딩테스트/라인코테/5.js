process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const N = data.split('\n')[0].split(' ').map(v => +v);
  const C = data.split('\n')[1].split(' ').map(v => +v);

  if (C[0] > N[0] || C[1] > N[1]) console.log('fail');

  const queue = [];
  const result = [];
  let minTime = 987654321;

  queue.push([0, 0, 0]);

  let visited = [];

  for (let i = 0; i < N[0]; i++) {
    visited[i] = [];
    for (let j = 0; j < N[1]; j++) {
      visited[i][j] = -1;
    }
  }

  while (queue.length > 0) {
    const cur = queue.shift();

    if (cur[0] === C[0] && cur[1] === C[1]) {
      result.push(cur[2]);
      minTime = minTime > cur[2] ? cur[2] : minTime;
      continue;
    }

    if (visited[cur[0]][cur[1]] !== -1 && cur[2] > visited[cur[0]][cur[1]]) {
      continue;
    }

    visited[cur[0]][cur[1]] = cur[2];

    const dir = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1]
    ];

    for (let i = 0; i < 4; i++) {
      const newY = cur[0] + dir[i][0];
      const newX = cur[1] + dir[i][1];

      if (0 <= newY && newY < N[0] &&
        0 <= newX && newX < N[1]) {
        queue.push([newY, newX, cur[2] + 1]);
      }
    }
  }

  console.log(minTime);
  console.log(result.filter(v => v === minTime).length);
});