import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movie, {params: {page}}),
    getAllGenres: () => axiosService.get(urls.genre)
}

export {
    movieService
};