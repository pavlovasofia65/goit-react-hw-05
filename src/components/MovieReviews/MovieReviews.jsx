import css from './MovieReviews.module.css'
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../tmbd.js'
import { useParams } from 'react-router-dom';

export default function MovieReviews(){
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchReviews(movieId)
            .then((d) => {
                setData(d);
            })
            .catch((err) => {
                console.error('Error fetching trending data:', err);
            });
    }, [movieId]);

    if (!data.length) {
        return <p className={css.message}>No reviews available for this movie.</p>;
    }

    return(
    <div>
        <ul>{data.map(rev => (
            <li key={rev.id}>
                <p>Author: {rev.author}</p>
                <p>{rev.content}</p>
            </li>
        ))}</ul>
    </div>)
}