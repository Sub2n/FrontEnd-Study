// 하나 개발 완료가 되면 배포 시도

function solution(progresses, speeds) {
  const ans = [];

  function deploy() {
    progresses.shift();
    speeds.shift();

    let num = 1;

    while (progresses.length > 0) {
      const first = progresses.shift();
      if (first >= 100) {
        speeds.shift();
        num += 1;
      } else {
        progresses.unshift(first);
        break;
      }
    }

    ans.push(num);
  }

  while (progresses.length > 0) {

    if (progresses[0] >= 100) deploy();

    for (let i = 0; i < progresses.length; ++i) {
      if (progresses[i] < 100) progresses[i] += speeds[i];
    }
  }

  return ans;
}

console.log(solution([93, 30, 55], [1, 30, 5]))