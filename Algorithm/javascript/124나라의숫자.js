function solution(n) {
  let ans = '';
  while (n > 0) {
    if (n % 3 === 0) {
      ans = '4' + ans;
      n = Math.floor(n / 3) - 1;
    } else {
      ans = (n % 3) + ans;
      n = Math.floor(n / 3);
    }
  }
  return ans;
}

console.log(solution(10) === '41');