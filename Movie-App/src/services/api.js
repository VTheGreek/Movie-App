const API_KEY = "1852b7f7dcb2d30b66cb509a25f88b92";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results;
}

export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent}(query)`);
    const data = await response.json()
    return data.results;
}