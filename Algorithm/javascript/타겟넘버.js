// 배열의 한 index에서 할 수 있는 동작 = + / -;
// 자료구조 {
//   index: number,
//   operations: [],
//   sum: number
// }

function solution(numbers, target) {
  const queue = [{
    index: 0,
    sum: 0
  }];

  let cases = 0;

  let cnt = 30;

  while (queue.length > 0) {
    const cur = queue.shift();
    const sumNow = cur.sum + numbers[cur.index];
    const subNow = cur.sum - numbers[cur.index];

    if (cur.index === numbers.length - 1) {
      if (sumNow === target || subNow === target) {
        cases += 1;
      }
      continue;
    } else {
      const next = cur.index + 1;

      queue.push({
        index: next,
        sum: sumNow
      });

      queue.push({
        index: next,
        sum: subNow
      })
    }
  }

  return cases;
}

console.log(solution([1, 1, 1, 1, 1], 3) === 5);