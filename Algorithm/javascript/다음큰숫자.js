function solution(n) {
  const binN = (n).toString(2);
  let ans = n + 1;

  while (true) {
    if (binN.split('').filter(b => b === '1').length === (ans).toString(2).split('').filter(b => b === '1').length) {
      return ans;
    } else ans += 1;
  }
}

console.log(solution(78));
console.log(solution(15));