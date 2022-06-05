import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {GenreBadge} from "../../components";
import {movieAction} from "../../redux";

const GenresPage = () => {
    const {genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieAction.getAllGenres())
    }, [])

    return (
        <div>
            {genres && genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresPage};