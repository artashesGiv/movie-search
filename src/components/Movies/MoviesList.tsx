import React from 'react'
import {movie} from '../../types/types'
import style from './MoviesList.module.scss'
import {Link} from 'react-router-dom'
import {MovieRating} from '../common/MovieRating/MovieRating'
import {CollapseText} from '../common/СutText/CollapseText'

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
      nameRu,
      filmLength,
      year,
      description,
      filmId,
      rating,
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
               {window.outerWidth > 1000 && <CollapseText text={description} maxLength={200}/>}
               <div className={style.other}>
                  <MovieRating rating={+rating} type={'small'}/>
                  <span>{nameEn && nameEn + ','} {filmLength}</span>
               </div>
            </div>
         </div>
      </Link>
   )
})