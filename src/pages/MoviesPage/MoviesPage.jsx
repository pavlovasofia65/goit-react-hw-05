import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList.jsx'
import { fetchFilms } from '../../tmbd.js'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    useEffect(() => {
        if (!query) return;

        fetchFilms(query)
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedQuery = searchInput.trim();

        if (trimmedQuery === '') return;

        setSearchParams({ query: trimmedQuery });
        setSearchInput('');
    };
    return(
        <div>
            <form name='form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
            {query && movies.length > 0 && <MovieList movies={movies} />}
            {query && movies.length === 0 && <p>No results found for "{query}"</p>}
            {!query && <p>Enter a movie name to search.</p>}
        </div>
    );
}