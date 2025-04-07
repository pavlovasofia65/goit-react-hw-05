import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList.jsx'
import { fetchFilms } from '../../tmbd.js'
import { useState } from 'react';

export default function MoviesPage() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    };
    return(
        <div>
            <form name='form' onSubmit={handleSubmit}>
                <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
            {query !== '' ? <MovieList fetchData={() => fetchFilms(query)}/> : <p>Enter a search term to begin.</p>}
        </div>
    );
}