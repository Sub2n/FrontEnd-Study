/* 
Dynamic Programming 기법을 Bottom-up 방식으로 구현했다.
문제는 Delemeter[N]을 구하는 것이고
작은 문제는 Fibonacci[N], Fibonacci[N+1]이다.
Delemeter[N] = 2 * (Delemeter[N] + Delemeter[N-1])로 구할 수 있다.
*/

function solution(N) {
  const d = [];
  d[0] = 1;
  d[1] = 1;

  for (let i = 2; i <= N + 1; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return 2 * (d[N - 1] + d[N]);
}

console.log(solution(5) === 26)
console.log(solution(6) === 42)