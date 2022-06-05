import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './movielist.module.css';

const MovieList = () => {
    const {movies} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieAction.getAll({page: query.get('page')}))
    },[query]);

    const prevPage = () => {
      const prevPage = +query.get('page') - 1;
      setQuery({page: `${prevPage}`})
    }

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }

    return (
        <div className={css.wrap}>
            <div className={css.movielist}>
                {movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.button}>
                <button disabled={+query.get('page') === 1} onClick={prevPage}>prev</button>
                <button disabled={+query.get('page') === 500} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {MovieList};