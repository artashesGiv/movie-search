import {movieAPI} from '../../../api/movieAPI'
import {createAsyncThunk} from '@reduxjs/toolkit'

//
// export const fetchMovies = (key: string, pageNumber: number = 1) => async (dispatch: AppDispatchType) => {
//    try {
//       dispatch(mainReducerActions.moviesFetching())
//       const data = await movieAPI.getMoviesByKeyWords(key, pageNumber.toString())
//       dispatch(mainReducerActions.moviesFetchingSuccess(data))
//       console.log(data)
//    } catch (err: any) {
//       dispatch(mainReducerActions.moviesFetchingError(err))
//    }
// }

export const fetchMovies = createAsyncThunk(
   'movie/fetchMoviesMyKeyword',
   async (param: { keyword: string, pageNumber?: number }, thinkAPI) => {
      try {
         const {keyword, pageNumber = 1} = param
         return await movieAPI.getMoviesByKeyWords(keyword, pageNumber)
      } catch (err) {
         return thinkAPI.rejectWithValue('Не удалось завершить поиск')
      }
   },
)
