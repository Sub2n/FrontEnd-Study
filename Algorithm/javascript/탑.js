// 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.
function solution(heights) {
  const answer = [];
  let check = false;
  while (heights.length > 0) {
    const top = heights.pop();
    for (let i = heights.length - 1; i > 0; i--) {
      console.log(heights, i, top, answer)
      if (heights[i] > top) {
        answer.unshift(i + 1);
        break;
      }
    }
    answer.unshift(0);
  }
  return answer;
}

console.log(solution([6, 9, 5, 7, 4])); // [0,0,2,2,4]