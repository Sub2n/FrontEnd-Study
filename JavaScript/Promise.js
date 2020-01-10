function PromiseChaining() {
  return new Promise(resolve => setTimeout(() => resolve([1]), 3000));
}

function PromiseAll() {
  return Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
  ]);
}

const promiseChaining = PromiseChaining();
promiseChaining
  .then(
    res => new Promise(resolve => setTimeout(() => resolve([...res, 2]), 2000))
  )
  .then(
    res => new Promise(resolve => setTimeout(() => resolve([...res, 3]), 1000))
  )
  .then(console.log)
  .catch(console.log);

const promiseAll = PromiseAll();
promiseAll
  .then(console.log) // [ 1, 2, 3 ]
  .catch(console.log);
