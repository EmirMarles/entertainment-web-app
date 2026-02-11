import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import films from '../starter-code/data.json'
import { BookMarked } from './pages/BookMarked'
import { useState, useEffect } from 'react'
import { MoviesPage } from './pages/MoviesPage'
import { TvSeriesPage } from './pages/TvSeriesPage'

function App() {
  const [currentPage, setCurrentPage] = useState('/')
  const [bookMarkedMovies, setBookMarkedMovies] = useState([])


  const [filmsData, setFilmsData] = useState(() => {
    const localFilms = localStorage.getItem('films')
    return localFilms ? JSON.parse(localFilms) : films
  })

  useEffect(() => {
    console.log('bookmarked movies:', bookMarkedMovies)
  }, [bookMarkedMovies])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage filmsData={filmsData} setFilmsData={setFilmsData} currentPage={currentPage} setCurrentPage={setCurrentPage} bookMarkedMovies={bookMarkedMovies} setBookMarkedMovies={setBookMarkedMovies} />}></Route>
        <Route path='/bookmarks' element={<BookMarked filmsData={filmsData} setFilmsData={setFilmsData} currentPage={currentPage} setCurrentPage={setCurrentPage} filmsData={filmsData} />}></Route>
        <Route path='/movies' element={<MoviesPage filmsData={filmsData} currentPage={currentPage} setCurrentPage={setCurrentPage} />}></Route>
        <Route path='/tv-series' element={<TvSeriesPage filmsData={filmsData} currentPage={currentPage} setCurrentPage={setCurrentPage} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
