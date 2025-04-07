import { Routes, Route, NavLink } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'
import MovieCast from '../MovieCast/MovieCast'
import MovieList from '../MovieList/MovieList'
import MovieReviews from '../MovieReviews/MovieReviews'
import Navigation from '../Navigation/Navigation'

function App() {
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
  const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
  const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

  return (
<div>
  <Suspense fallback={<div>Loading page...</div>}>
    <Navigation />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
        <Route path='cast' element={<MovieCast />} />
        <Route path='reviews' element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
</div>
  )
}

export default App
