import React from 'react'
import {movie} from '../../types/types'
import style from './Movies.module.scss'
import {CollapseText} from '../common/СutText/CollapseText'
import {Link} from 'react-router-dom'

type MoviesListPropsType = {
   movies: movie[]
   totalFilms: number
}

export const MoviesList: React.FC<MoviesListPropsType> = React.memo(({movies, totalFilms}) => {
   return (
      <div className={style.movieList}>
         {totalFilms > 0 && <span className={style.totalFilms}>Всего найдено: {totalFilms}</span>}
         {
            movies.map(movie => {
               return <MovieCard key={movie.filmId} movie={movie}/>

            })
         }
      </div>
   )
})

const MovieCard: React.FC<{ movie: movie }> = React.memo(({movie}) => {

   const {
      posterUrlPreview,
      nameEn,
      description,
      nameRu,
      filmLength,
      year,
      filmId
   } = movie

   return (
      <Link to={'/film/' + filmId}>
         <div className={style.movieCard}>
            <img src={posterUrlPreview} alt="preview"/>
            <div className={style.description}>
               <div>
                  <h3 className={style.name}>{nameRu}</h3>
                  <span className={style.year}>{year}</span>
               </div>
               <span className={style.other}>{nameEn}, {filmLength}</span>
               <CollapseText className={style.descriptionText} text={description}/>
            </div>
         </div>
      </Link>
   )
})