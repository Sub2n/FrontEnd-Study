const addToArrayForm = function (A, K) {
  const Alength = A.length;
  const kArr = String(K).split('').map(v => parseInt(v));
  const Klength = kArr.length;
  const result = [];
  let carry = 0;

  const length = Alength > Klength ? Alength : Klength;
  const smaller = length === Klength ? A : kArr;
  const larger = smaller === kArr ? A : kArr;

  for (let i = length; i > 0; i--) {
    if (!smaller[smaller.length - (larger.length - i) - 1]) {
      // K가 없으면
      const res = larger[i - 1] + carry;
      if (res >= 10) {
        // carry 발생시
        result.unshift(res - 10);
        carry = 1;

      } else {
        result.unshift(res);
        carry = 0;

      }
    } else {
      // K가 있으면
      const res = larger[i - 1] + smaller[smaller.length - (larger.length - i) - 1] + carry;
      if (res >= 10) {
        // carry 발생시
        result.unshift(res - 10);
        carry = 1;
      } else {
        result.unshift(res);
        carry = 0;
      }
    }
  }

  if (carry) result.unshift(carry);

  return result;
};

// console.log('result: ', addToArrayForm([1, 2, 0, 0], 34));
// console.log('result: ', addToArrayForm([2, 7, 4], 181));
// console.log('result: ', addToArrayForm([2, 1, 5], 806));
// console.log('result: ', addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1));
console.log('result: ', addToArrayForm([1], 33));