import css from './HomePage.module.css'
import { fetchTrending } from '../../tmbd.js'
import MovieList from '../../components/MovieList/MovieList.jsx'
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetchTrending()
            .then(data => setTrendingMovies(data))
            .catch(error => console.error('Error fetching trending movies:', error));
    }, []);
    return(
        <MovieList movies={trendingMovies}/>
    );
}