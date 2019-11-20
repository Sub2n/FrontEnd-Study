function solition(N) {
  // 2kg, 5kg 상자가 N kg 만족하게 최소 몇 개 박스로 가능한지 return
  let ans = 0; // box의 개수
  const item = [5, 2];

  let temp = N;
  let isPossible = false;

  // N이 2랑 5의 합으로 이루어지는지를 체크
  // N - 2 * i = 5 * ??;
  // N = 2 * i +  5 * ??;
  for (let i = 0; i < N / 2; i++) {
    temp -= 2;
    if (temp % 5 === 0) {
      isPossible = true;
      break;
    }
  }
  if (!isPossible) return -1; // N이 2랑 5로 이루어지지 않으면 바로 return -1

  // Greedy Algorithm
  for (let i = 0; i < 2; i++) {
    // 큰 것부터 넣음
    while (N >= item[i]) {
      N -= item[i];
      if (N % 2 !== 0 && N % 5 !== 0) {
        // 단, 큰 것을 넣은 결과가 2, 5로 이루어지지 않으면 도로 뱉고 작은 걸 넣음
        N += item[i];
        N -= item[i + 1] ? item[i + 1] : 0;
      }
      ans += 1;
    }
  }
  return [Math.floor(ans / 20) + 1, ans];
}

console.log(solition(4048)); // 41 812