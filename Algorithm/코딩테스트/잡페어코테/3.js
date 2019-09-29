function solution(sticker) {
  let max = 0;
  // const maxArr = [0];

  for (let i = 0; i < sticker.length; i++) {

    if (sticker[i + 1] && sticker[i] >= sticker[i + 1]) {
      max += sticker[i];
      console.log(i, max)
      i += 1;
    } else {
      if (i === sticker.length - 1) {
        max += sticker[i];
        console.log(i, max);
      }
    }
    // 뒤에가 나보다 크면 그냥 감...
  }
  console.log(max)
  // function cutSticker(idx, acc) {
  //   if (idx > sticker.length - 1) {
  //     max = max > acc ? max : acc;
  //     return;
  //   }

  //   cutSticker(idx + 2, acc + (sticker[idx] ? sticker[idx] : 0));
  //   cutSticker(idx + 1, acc);
  // }

  // cutSticker(0, 0); // (index, acc)

  return max;
}

console.log(solution([12, 12, 12, 12, 12]) === 36)
console.log(solution([12, 80, 14, 22, 100]) === 180)