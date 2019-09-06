function solution(N, stages) {
  let answer = [];
  let failure = [];
  let player = 0;

  stages.sort().forEach((stage) => {
    let fail = {};

    fail[stage] = !failure[stage - 1] ? 1 : failure[stage - 1][stage] + 1;

    failure[stage - 1] = fail;
  })

  for (let i = 0; i < failure.length; i++) {
    if (!failure[i]) {
      let fail = {};
      fail[i + 1] = 0;
      failure[i] = fail;
    }
    player += failure[i][i + 1];
  }
  // console.dir(failure);

  failure.reduce((acc, cur, idx) => {
    // console.log(idx, acc, cur, player - acc);
    let fr = {
      stage: idx + 1,
      ratio: cur[idx + 1] / (player - acc)
    };
    if (fr.stage <= N) answer.push(fr);
    return acc + cur[idx + 1];
  }, 0);

  // console.log(answer);

  return answer.sort((prev, cur) => {
    return prev.ratio < cur.ratio;
  }).map(({
    stage
  }) => stage)
}

console.log('test1', solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log('test2', solution(4, [4, 4, 4, 4, 4]));