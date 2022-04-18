import {createAsyncThunk} from '@reduxjs/toolkit'
import {movieAPI} from '../../../api/movieAPI'

export const fetchMovieByID = createAsyncThunk(
   'movie/fetchMovieByID',
   async (movieID: string, thinkAPI) => {
      try {
         const movie = await movieAPI.getMovieByID(movieID)
         const staff = await movieAPI.getStaffByMovieID(movieID)
         return {movie, staff}
      } catch (err) {
         return thinkAPI.rejectWithValue('Что то пошло не так, попробуйте позже')
      }
   },
)