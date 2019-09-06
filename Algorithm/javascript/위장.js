function solution(clothes) {
  let answer = 1;
  
  const types = {};
  let typeNum = 0;
  
  clothes.forEach(cloth => {
      if (!types[cloth[1]]) { types[cloth[1]] = [cloth[0]]; typeNum += 1;}
      else types[cloth[1]] = [...types[cloth[1]], cloth[0]];
  });
  
  for (let type in types) {
      answer *= types[type].length + 1;
  }
  
  return answer - 1;
}