import css from './Navigation'
import { NavLink } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage';
import MovieList from '../MovieList/MovieList';

export default function Navigation(){
    return(
        <nav className={css.nav}>
            <NavLink className={css.navlink} to='/'>Home</NavLink>
            <NavLink className={css.navlink} to='/movies'>Movies</NavLink>
        </nav>
    );
}