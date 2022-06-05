import {NavLink} from "react-router-dom";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <h1>Movie - shmovie</h1>
            <div className={css.headerButton}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
            </div>
        </div>
    );
};

export {Header};