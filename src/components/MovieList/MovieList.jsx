import css from './MovieList.module.css'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ fetchData }){
    const [data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetchData()
            .then((d) => {
                setData(d);
            })
            .catch((err) => {
                console.error('Error fetching trending data:', err);
            });
    }, [fetchData]);
    return(
        <ul className={css.list}>
            {data.map(film => (
            <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</Link>
            </li>
            ))}
        </ul>
    );
}