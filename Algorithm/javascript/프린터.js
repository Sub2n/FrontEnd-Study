// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

function solution(priorities, location) {
  let printed = 0;
  const queue = priorities.map((priority, location) => {
    return {
      location,
      priority
    };
  })

  do {
    const job = queue.shift();
    if (queue.filter(task => task.priority > job.priority).length >= 1) {
      queue.push(job);
    } else {
      printed += 1;
      if (job.location === location) return printed;
    }
  } while (queue.length > 0);

}

console.log(solution([2, 1, 3, 2], 2) === 1);
console.log(solution([1, 1, 9, 1, 1, 1], 0) === 5);