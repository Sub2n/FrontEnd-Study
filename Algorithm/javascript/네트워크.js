function solution(n, computers) {
  let networks = 0;
  const queue = [];
  const visit = new Array(200);

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      visit[i] = 1;
      networks += 1;
      queue.push(i);
    }

    while (queue.length > 0) {
      const com = queue.shift();

      for (let i = 0; i < n; i++) {
        if (!visit[i] && computers[com][i] === 1) {
          visit[i] = 1;
          queue.push(i);
        }
      }
    }
  }

  return networks;
}

console.log(solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]));
console.log(solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1]
]));