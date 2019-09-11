var numJewelsInStones = function (J, S) {
  let result = 0;
  const jewels = J.split('');
  jewels.forEach(jw => {
    const regexp = new RegExp(`${jw}`, 'g');
    result += [...S.matchAll(regexp)].length;
  })
  return result;
};