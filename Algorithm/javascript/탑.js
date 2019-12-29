// 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.
function solution(heights) {
  const answer = [];
  let check;

  while (heights.length > 0) {
    const top = heights.pop();
    check = false;

    for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > top) {
        answer.unshift(i + 1);
        check = true;
        break;
      }
    }

    if (!check) answer.unshift(0);
  }

  return answer;
}

// console.log(solution([6, 9, 5, 7, 4])); // [0,0,2,2,4]
// console.log(solution([9, 1, 1, 1])); //[0, 1, 1, 1]
console.log(solution([7, 6, 5, 4, 3, 2, 1])); // 	[0, 1, 2, 3, 4, 5, 6]