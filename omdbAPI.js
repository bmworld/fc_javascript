import axios from 'axios';

function fetchMovies() { 
  // 영화 데이터 받을 사이트
  // http://www.omdbapi.com/
  // Query //
  // apikey: 해당사이트에서 발급받은 KEY
  // s: Movie title to search for.
  axios.get('https://www.omdbapi.com/?apikey=89e04afa&s=frozen')
  .then(res=>{
    console.log(res);
    const h1El = document.querySelector('h1');
    const imgEl = document.querySelector('img');
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster

  });
  // HTTP 보다는 HTTPS로 요청
}


fetchMovies();