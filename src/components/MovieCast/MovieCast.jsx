import css from './MovieCast.module.css'
import { useState, useEffect } from 'react';
import { fetchCredits } from '../../tmbd.js'
import { useParams } from 'react-router-dom';

export default function MovieCast(){
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchCredits(movieId)
            .then((d) => {
                setData(d);
            })
            .catch((err) => {
                console.error('Error fetching trending data:', err);
            });
    }, [movieId]);

    if (!data.length) {
            return <p className={css.message}>No cast available for this movie.</p>;
    }
    return (
        <ul>
            {data.map(actor => (
                <li key={actor.id}>
                    <img src={actor.profile_path 
                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                            : 'https://via.placeholder.com/200x300?text=No+Image'}
                        alt={actor.name}
                        className={css.img}/>
                    <p>{actor.original_name}</p>
                    <p>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
    );
}