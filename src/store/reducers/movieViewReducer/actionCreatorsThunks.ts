import {createAsyncThunk} from '@reduxjs/toolkit'
import {movieAPI} from '../../../api/movieAPI'

export const fetchMovieByID = createAsyncThunk(
   'movie/fetchMovieByID',
   async (movieID: string, thunkAPI) => {
      try {
         const movie = await movieAPI.getMovieByID(movieID),
            staff = await movieAPI.getStaffByMovieID(movieID),
            video = await movieAPI.getMovieVideoByID(movieID),
            distribution = await movieAPI.getDistributionsDataByID(movieID)

         return {movie, staff, video, distribution}
      } catch (err) {
         return thunkAPI.rejectWithValue('Что то пошло не так, попробуйте позже')
      }
   },
)