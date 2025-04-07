import css from './HomePage.module.css'
import { fetchTrending } from '../../tmbd.js'
import MovieList from '../../components/MovieList/MovieList.jsx'

export default function HomePage() {
    return(
        <MovieList fetchData={fetchTrending}/>
    );
}