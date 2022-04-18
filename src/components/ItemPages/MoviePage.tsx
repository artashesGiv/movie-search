import React, {useEffect} from 'react'
import style from './ItemPage.module.scss'
import {Preloader} from '../common/Preloader/Preloader'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {fetchMovieByID} from '../../store/reducers/movieViewReducer/actionCreatorsThunks'
import {person} from '../../types/types'
import {CollapseText} from '../common/СutText/CollapseText'
import {useParams} from 'react-router-dom'



export const MoviePage: React.FC = React.memo(() => {

   const dispatch = useAppDispatch()
   const {movie, isLoading, staff} = useAppSelector(state => state.itemViewSlice)
   const movieID = useParams().movieId

   useEffect(() => {
      dispatch(fetchMovieByID(movieID ? movieID : ''))
   }, [dispatch, movieID])

   if (isLoading) {
      return <Preloader/>
   }

   const tableData = {
      year: movie.year,
      countries: [...movie.countries],
      genres: [...movie.genres],
      slogan: movie.slogan,
      staff,
   }

   // @ts-ignore
   const ratingAgeForRender = movie.ratingAgeLimits && [...movie.ratingAgeLimits].map(i => isFinite(i) ? i : '').join('') + '+'

   return (
      <div className={style.itemPage}>
         <div className={style.poster}>
            <img src={movie.posterUrl} alt="poster"/>
         </div>
         <div className={style.about}>
            <h1>{movie.nameRu} ({movie.year})</h1>
            <span>{movie.nameOriginal} {ratingAgeForRender}</span>
            <DataTable data={tableData}/>
         </div>
         <div className={style.information}>
            <span className={style.rating}>{movie.ratingKinopoisk}</span>
            <span className={style.totalRatingCount}>{movie.ratingKinopoiskVoteCount} оценок</span>
         </div>
      </div>
   )
})

type tableDataType = {
   year: number
   countries: {
      country: string
   }[]
   genres: {
      genre: string
   }[]
   slogan: string
   staff: person[]
}

type DataTablePropsType = {
   data: tableDataType
}

const DataTable: React.FC<DataTablePropsType> = React.memo(({data}) => {

   const DIRECTOR = data.staff.filter(p => p.professionKey === 'DIRECTOR')
   const WRITER = data.staff.filter(p => p.professionKey === 'WRITER')
   const PRODUCER = data.staff.filter(p => p.professionKey === 'PRODUCER')
   const OPERATOR = data.staff.filter(p => p.professionKey === 'OPERATOR')
   const COMPOSER = data.staff.filter(p => p.professionKey === 'COMPOSER')
   const DESIGN = data.staff.filter(p => p.professionKey === 'DESIGN')
   const EDITOR = data.staff.filter(p => p.professionKey === 'EDITOR')

   return (
      <div className={style.aboutTable}>
         <h2>O фильме</h2>
         <table>
            <tbody>
            <tr>
               <td>Год производства</td>
               <td>{data.year}</td>
            </tr>
            <tr>
               <td>Страна</td>
               <td>{<ObjectListMappingAsString list={data.countries} value={'country'}/>}</td>
            </tr>
            <tr>
               <td>Жанр</td>
               <td>{<ObjectListMappingAsString list={data.genres} value={'genre'}/>}</td>
            </tr>
            <tr>
               <td>Слоган</td>
               <td style={{color: 'grey'}}>{data.slogan ? `"${data.slogan}"` : '—'}</td>
            </tr>
            <tr>
               <td>Режиссер</td>
               <td>{<ObjectListMappingAsString list={DIRECTOR} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Сценарий</td>
               <td>{<ObjectListMappingAsString list={WRITER} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Продюсер</td>
               <td>{<ObjectListMappingAsString list={PRODUCER} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Оператор</td>
               <td>{<ObjectListMappingAsString list={OPERATOR} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Композитор</td>
               <td>{<ObjectListMappingAsString list={COMPOSER} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Художник</td>
               <td>{<ObjectListMappingAsString list={DESIGN} value={'nameRu'}/>}</td>
            </tr>
            <tr>
               <td>Монтаж</td>
               <td>{<ObjectListMappingAsString list={EDITOR} value={'nameRu'}/>}</td>
            </tr>
            </tbody>
         </table>
      </div>
   )
})

const ObjectListMappingAsString: React.FC<{list: any, value: string}> = ({list, value}) => {
   const text = list.map((c: any) => c[value]).join(', ')
   return <CollapseText text={text} maxLength={30}/>
}