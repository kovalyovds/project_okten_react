import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviePage, MoviesPage} from "./pages";
import css from './App.css';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
