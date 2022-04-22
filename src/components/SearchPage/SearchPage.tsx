import React from 'react'
import {SearchForm} from '../SearchForm/SearchForm'
import {MoviesList} from '../Movies/MoviesList'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {fetchMovies} from '../../store/reducers/search/actionCreatorsThunks'
import {Preloader} from '../common/Preloader/Preloader'
import {Paginator} from '../common/Paginator/Paginator'
import {setCurrentPage} from '../../store/reducers/search/searchSlice'


export const SearchPage: React.FC = React.memo(() => {

   const {
      films,
      isLoading,
      searchFilmsCountResult,
      keyword,
      pageSize,
      currentPage,
   } = useAppSelector(state => state.searchSlice)
   const dispatch = useAppDispatch()

   const searchByKeyWords = (keyword: string) => {
      dispatch(fetchMovies({keyword}))
   }

   const onPageChanged = (pageNumber: number) => {
      dispatch(fetchMovies({keyword, pageNumber}))
      dispatch(setCurrentPage(pageNumber))
   }

   return (
      <>
         <SearchForm search={searchByKeyWords} isLoading={isLoading}/>
         <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={searchFilmsCountResult}
                    pageSize={pageSize}/>
         {
            isLoading
               ? <Preloader/>
               : <MoviesList movies={films} totalFilms={searchFilmsCountResult}/>
         }
      </>
   )
})
