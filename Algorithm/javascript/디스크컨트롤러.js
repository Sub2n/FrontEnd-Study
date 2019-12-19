/*
 작업 소요시간 작은 순서대로 우선순위 큐
*/
function solution(jobs) {
  jobs = jobs.sort((a, b) => a[1] - b[1]);
  const length = jobs.length;
  let throughputs = 0;
  let time = 0;

  while (jobs.length > 0) {
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      if (time >= job[0]) {
        throughputs += time - job[0] + job[1];
        time += job[1];
        jobs = jobs.filter((e, idx) => idx !== i);
        break;
      }
      if (i === jobs.length - 1) time += 1;
    }
  }
  return Math.floor(throughputs / length);
}

console.log(solution([
  [0, 3],
  [1, 9],
  [3, 6],
  [2, 15]
]) === 9);