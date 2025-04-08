import css from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }){
    const location = useLocation();
    
    return(
        <ul className={css.list}>
            {movies.map(film => (
            <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</Link>
            </li>
            ))}
        </ul>
    );
}