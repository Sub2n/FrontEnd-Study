/*
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
정답이 클 수 있으니 문자열로 바꾸어 리턴
*/

// 완전탐색
function swap(arr, n1, n2) {
  const temp = arr[n1];
  arr[n1] = arr[n2];
  arr[n2] = temp;
}

function makeNumbers(set, arr, index, toPick) {
  if (index === toPick) {
    set.add(+arr.filter((org, i) => i < toPick).join(''));
  } else {
    for (let i = index; i < arr.length; ++i) {
      swap(arr, index, i);
      makeNumbers(set, arr, index + 1, toPick);
      swap(arr, index, i);
    }
  }
}

function solution(numbers) {
  const nums = new Set();

  makeNumbers(nums, numbers, 0, numbers.length);

  console.log(Array.from(nums).sort((a, b) => b - a))

  return Array.from(nums).sort((a, b) => b - a)[0] + '';
}

console.log(solution([6, 10, 2])); // 6210
console.log(solution([3, 30, 34, 5, 9])); // 9534330