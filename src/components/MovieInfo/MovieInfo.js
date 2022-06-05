import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

import {baseImage} from "../../constants";
import css from './movieinfo.module.css';

const MovieInfo = () => {
    const {state} = useLocation();
    const {backdrop_path, genre_ids, original_language, title, release_date, overview, vote_average} = state;
    const {genres} = useSelector(state => state.movies)

    // const [currentGenres, setCurrentGenres] = useState();
    //
    // for (const genreId of genre_ids) {
    //     for (const key in genres) {
    //         if (genres[key].id === genreId) {
    //             // const data = genres[key].name;
    //             // setCurrentGenres({data})
    //             console.log(genres[key].name)
    //         }
    //     }
    // }

    return (
        <div className={css.movieinfo}>
            <div>
                <img src={`${baseImage}${backdrop_path}`} alt={title}/>
                <h2>{title} - {original_language}</h2>
                <h3>{release_date}</h3>
            </div>
            <div>
                {/*<h3>{currentGenres}</h3>*/}
                <h3>{overview}</h3>
                <h2>{vote_average}</h2>
            </div>
        </div>
    );
};

export {MovieInfo};