const fairCandySwap = function (A, B) {
  const sumA = A.reduce((a, b) => a + b);
  const sumB = B.reduce((a, b) => a + b);

  console.log(sumA, sumB)

  for (let i = 0; i < A.length; i++) {
    const fair = ((sumB - sumA) / 2) + A[i];
    console.log(fair)
    if (B.includes(fair)) return [A[i], fair]
  }

};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));