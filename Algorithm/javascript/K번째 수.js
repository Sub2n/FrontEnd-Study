function solution(array, commands) {
  const answer = [];
  commands.forEach(cmd => {
    const arr = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
    answer.push(arr[cmd[2] - 1])
  });
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3]
]))