/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    console.log(stones);
    if (stones[0] === stones[1]) stones = stones.slice(2);
    else {
      const remainStone = stones[0] - stones[1];
      stones = stones.slice(2);
      stones.push(remainStone);
    }
  }
  return stones[0] ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));