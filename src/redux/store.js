import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
};