// Brute-force
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }

  return true;
}

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
  const arr = numbers.split('');

  for (let toPick = 1; toPick <= arr.length; ++toPick) {
    makeNumbers(nums, arr, 0, toPick);
  }

  let ans = 0;

  nums.forEach((num) => {
    if (isPrime(+num)) ans += 1;
  })

  return ans;
}

// console.log(solution("17") === 3);
// console.log(solution("011") === 2);