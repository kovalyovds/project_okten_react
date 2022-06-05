const baseURL = process.env.REACT_APP_API;
const baseImage = 'https://image.tmdb.org/t/p/w500';

const urls = {
    movie: '/discover/movie',
    genre: '/genre/movie/list'
}

export {
    baseURL,
    baseImage,
    urls
};