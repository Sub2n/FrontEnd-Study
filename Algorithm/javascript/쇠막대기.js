// 레이저 ()를 replace와 정규표현식을 이용해서 대체
// 정규표현식 내부의 특수문자는 escape sequence(\)를 사용해야함
function solution(arrangement) {
  const arr = arrangement.replace(/\(\)/g, 'x').split('');
  const stack = [];
  let ans = 0;

  arr.forEach(elem => {
    if (elem === '(') stack.push(elem);
    else if (elem === 'x') {
      ans += stack.length;
    } else if (elem === ')') {
      stack.pop();
      ans += 1;
    }
  });

  return ans;
}

console.log(solution('()(((()())(())()))(())')); // 17