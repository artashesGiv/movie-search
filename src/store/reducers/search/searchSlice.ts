import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {movieSearchDataResponseById} from '../../../types/types'
import {fetchMovies} from './actionCreatorsThunks'

type initialStateType = movieSearchDataResponseById & {
   pageSize: number
   currentPage: number
   isLoading: boolean
   error: string
}

const initialState: initialStateType = {
   films: [],
   keyword: '',
   pagesCount: 0,
   currentPage: 1,
   searchFilmsCountResult: 0,
   pageSize: 20,
   isLoading: false,
   error: '',
}

const searchSlice = createSlice({
   name: 'searchMovie',
   initialState,
   reducers: {
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload
         console.log(state.currentPage)
      },
   },
   extraReducers: {
      [fetchMovies.fulfilled.type]: (state, action: PayloadAction<movieSearchDataResponseById>) => {
         state.error = ''
         state.films = action.payload.films
         state.keyword = action.payload.keyword
         state.pagesCount = action.payload.pagesCount
         state.searchFilmsCountResult = action.payload.searchFilmsCountResult
         state.isLoading = false
      },
      [fetchMovies.pending.type]: (state) => {
         state.isLoading = true
      },
      [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload
         state.isLoading = false
      },
   },
})

export const {setCurrentPage} = searchSlice.actions
export default searchSlice.reducer