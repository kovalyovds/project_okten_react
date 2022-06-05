import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzIyNDk3NDdkODRmMGU1Y2ViZWU2MTIyOTViNmVmNyIsInN1YiI6IjYyOTlkM2UwNTUwN2U5MTQ5NzU0YzEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Oz2TKvz7L9KFy5JNcj9aOfwtxbmXhSKMfdHDVwgRe8'
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})

export {
    axiosService
};