function solution(genres, plays) {
  const genreObject = {};
  const genreTable = [];
  const track = [];

  genres.forEach((genre, i) => {
    if (genreObject[genre]) {
      genreObject[genre]['plays'] += plays[i];
      genreObject[genre]['songs'].push({
        i,
        play: plays[i]
      });
    } else {
      genreObject[genre] = {
        plays: plays[i],
        songs: [{
          i,
          play: plays[i]
        }]
      }
    }
  });

  // 객체 -> 배열
  for (let genre in genreObject) {
    genreTable.push({
      genre,
      plays: genreObject[genre]['plays'],
      songs: genreObject[genre]['songs']
    });
  }

  genreTable.sort((a, b) => a.plays < b.plays);

  genreTable.forEach(({
    songs
  }) => {
    songs.sort((a, b) => {
      if (a.play > b.play) return -1;
      else if (a.play < b.play) return 1;
      else return a.i > b.i ? 1 : -1;
    });
    for (let i = 0; i < 2; i++) {
      if (!songs[i]) return;
      else track.push(songs[i].i);
    }
  })

  return track;

}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))