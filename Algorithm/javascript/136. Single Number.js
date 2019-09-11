var singleNumber = function (nums) {
  const numset = new Set(nums);
  return 2 * [...numset].reduce((a, b) => a + b) - nums.reduce((a, b) => a + b);
};