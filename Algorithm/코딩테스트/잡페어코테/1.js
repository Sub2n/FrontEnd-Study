function solution(goods, boxes) {
  const sGoods = goods.sort((a, b) => b - a);
  const sBoxes = boxes.sort((a, b) => b - a);
  let packed = 0;
  let boxptr = 0;

  for (let i = 0; i < sGoods.length; i++) {
    for (let j = boxptr; j < sBoxes.length; j++) {
      if (sGoods[i] > sBoxes[j]) {
        break;
      } else {
        packed += 1;
        boxptr = j + 1;
        break;
      }
    }
  }

  return packed;
}

console.log(solution([5, 3, 7], [3, 7, 6]) === 3)
console.log(solution([1, 2], [2, 3, 1]) === 2)
console.log(solution([3, 8, 6], [5, 6, 4]) === 2)