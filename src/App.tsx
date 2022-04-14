import React, {useState} from 'react'
import './App.css'
import {SearchForm} from './components/SearchForm/SearchForm'
import {movieAPI} from './api/movieAPI'
import {movie} from './types/types'
import {MovieList} from './components/Movies/Movies'


export const App = () => {

   const [movies, setMovies] = useState<movie[]>([])

   const searchByKeyWords = (key: string) => {
      movieAPI.getMoviesByKeyWords(key).then(data => {
         setMovies(data.films)
      })
   }

   return (
      <div className="App">
         <SearchForm search={searchByKeyWords}/>
         <MovieList movies={movies}/>
      </div>
   )
}
