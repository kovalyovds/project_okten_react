import css from './genrebadge.module.css';

const GenreBadge = ({genre: {name}}) => {
    return (
        <div className={css.genrebadge}>
            {name}
        </div>
    );
};

export {GenreBadge};