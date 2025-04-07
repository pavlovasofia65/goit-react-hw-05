import css from './MovieDetailsPage.module.css'
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchFilm } from '../../tmbd.js'
import { useEffect, useState } from 'react';
import MovieCast from '../../components/MovieCast/MovieCast.jsx';
import MovieReviews from '../../components/MovieReviews/MovieReviews.jsx';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetchFilm(movieId)
            .then((d) => {
                setFilm(d);
            })
            .catch((err) => {
                console.error('Error fetching trending data:', err);
            });
    }, [movieId]);
    
    if (!film) {
        return <p>Loading...</p>;
    }
    
    return(
        <div className={css.film}>
            <img src={film.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={film.original_title}
                className={css.img}/>
            <div className={css.filminfo}>
                <h2>{film.original_title}</h2>
                <p>User score: {film.vote_average}</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h3>Genres</h3>
                {film.genres.map(genre => (<span key={genre.id}>{genre.name}</span>))}
                <h3>Additional information</h3>
            </div>
            <div>
                <ul>
                    <li><Link to='cast' state={{ from: location }}>Cast</Link></li>
                    <li><Link to='reviews' state={{ from: location }}>Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}