// R x C 크기 배열 좌표 중 (r0, c0)과 거리가 가까운 좌표 순으로 정렬하여 리턴


const allCellsDistOrder = function (R, C, r0, c0) {
  const matrix = []; //[[x0, y0, d], [x0, y1, d], ...]
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      matrix.push([i, j, 0]);
    }
  }

  return matrix.map((coord) => [coord[0], coord[1], Math.abs(r0 - coord[0]) + Math.abs(c0 - coord[1])]).sort((a, b) => a[2] - b[2]).map(coord => [coord[0], coord[1]])
};

// console.log('test1: ', allCellsDistOrder(1, 2, 0, 0) === [
//   [0, 0],
//   [0, 1]
// ])


// console.log('test2: ', allCellsDistOrder(2, 2, 0, 1) === [
//   [
//     [0, 1],
//     [0, 0],
//     [1, 1],
//     [1, 0]
//   ]
// ])


// console.log('test1: ', allCellsDistOrder(2, 3, 1, 2));
// console.log('test2: ', allCellsDistOrder(3, 4, 0, 1));