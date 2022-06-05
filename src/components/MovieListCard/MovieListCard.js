import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieAction} from "../../redux";
import {baseImage} from "../../constants";
import css from './movielistcard.module.css'

const MovieListCard = ({movie}) => {
    const {title, vote_average, poster_path} = movie;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const movieInfo = () => {
        dispatch(movieAction.currentMovies({title}))
        navigate('/movie', {state: movie})
    }

    return (
        <div className={css.movielistcard} onClick={movieInfo}>
            <img src={`${baseImage}${poster_path}`} alt={title}/>
            <h3>{title}</h3>
            <h3>R = {vote_average}</h3>
        </div>
    );
};

export {MovieListCard};