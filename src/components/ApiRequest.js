const API_KEY = 'bdec1fccee55a5f07f481f55fd8dec26';
const API_REQUEST = 'https://api.themoviedb.org/3/movie/550?api_key=bdec1fccee55a5f07f481f55fd8dec26';
const IMAGE_REQUEST = 'https://image.tmdb.org/t/p/w200';
const SEARCH_REQUEST = 'https://api.themoviedb.org/3/search/movie?api_key=bdec1fccee55a5f07f481f55fd8dec26&language=en-US&page=1&include_adult=false';

const requests = {
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    // fetchTrending: `trending/movie/week?api_key=${API_KEY}`,
    fetchPopular: ` movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: ` movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;