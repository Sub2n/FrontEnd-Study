process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const numMesg = +data.split('\n')[0].split(' ')[0];
  const numCsm = +data.split('\n')[0].split(' ')[1];
  const messages = data.split('\n').slice(1).map(v => +v);

  const Consumers = [];
  for (let i = 0; i < numCsm; i++) {
    Consumers[i] = [];
  }

  (function () {
    const task = messages.shift();
    for (let i = 0; i < task; i++) Consumers[0].push(task);
  }());

  while (messages.length > 0) {
    const task = messages.shift();

    for (let i = 1; i < Consumers.length; i++) {
      if (Consumers[i - 1].length > Consumers[i].length) {
        for (let j = 0; j < task; j++) Consumers[i].push(task);
        continue;
      } else {
        for (let j = 0; j < task; j++) Consumers[i - 1].push(task);
        continue;
      }
    }
  }

  console.log(Consumers.sort((a, b) => b.length - a.length)[0].length);

});