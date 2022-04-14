import React from 'react'
import {movie} from '../../types/types'
import style from './Movies.module.scss'

export const MovieList: React.FC<{ movies: movie[] }> = ({movies}) => {
   return (
      <div className={style.movieList}>
         {
            movies.map(movie => {
               return <MovieCard key={movie.filmId} movie={movie}/>

            })
         }
      </div>
   )
}

const MovieCard: React.FC<{ movie: movie }> = ({movie}) => {
   return (
      <div className={style.movieCard}>
         <img src={movie.posterUrlPreview} alt="preview"/>
         <div className={style.description}>
            <div>
               <h3 className={style.name}>{movie.nameRu}</h3>
               <span className={style.year}>{movie.year}</span>
            </div>
            <span className={style.other}>{movie.nameEn}, {movie.filmLength}</span>
            <p className={style.descriptionText}>{movie.description}</p>
         </div>
      </div>
   )
}