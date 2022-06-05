import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: null,
    page: null,
    currentMovies: null,
    genres: []
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
);

const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async () => {
        const {data} = await movieService.getAllGenres();
        return data
    }
);

const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        currentMovies: ((state, action) => {
            state.currentMovies = action.payload
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.page = page
                state.movies = results
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
    }
});

const {reducer: movieReducer, actions: {currentMovies}} = movieSlice;

const movieAction = {
    getAll,
    currentMovies,
    getAllGenres
}

export {
    movieReducer,
    movieAction
}