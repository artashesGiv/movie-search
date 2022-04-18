import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {person, responseDataMovieByID} from '../../../types/types'
import {fetchMovieByID} from './actionCreatorsThunks'

type responseDataType = { movie: responseDataMovieByID, staff: person[] }

type initialStateType = responseDataType & {
   isLoading: boolean
   error: string
}

const initialState: initialStateType = {
   movie: {
      completed: false,
      countries: [],
      coverUrl: '',
      description: '',
      editorAnnotation: '',
      endYear: 0,
      filmLength: 0,
      genres: [],
      has3D: false,
      hasImax: false,
      imdbId: '',
      isTicketsAvailable: false,
      kinopoiskId: 0,
      lastSync: '',
      logoUrl: '',
      nameEn: '',
      nameOriginal: '',
      nameRu: '',
      posterUrl: '',
      posterUrlPreview: '',
      productionStatus: '',
      ratingAgeLimits: '',
      ratingAwait: 0,
      ratingAwaitCount: 0,
      ratingFilmCritics: 0,
      ratingFilmCriticsVoteCount: 0,
      ratingGoodReview: 0,
      ratingGoodReviewVoteCount: 0,
      ratingImdb: 0,
      ratingImdbVoteCount: 0,
      ratingKinopoisk: 0,
      ratingKinopoiskVoteCount: 0,
      ratingMpaa: '',
      ratingRfCritics: 0,
      ratingRfCriticsVoteCount: 0,
      reviewsCount: 0,
      serial: false,
      shortDescription: '',
      shortFilm: false,
      slogan: '',
      startYear: 0,
      type: '',
      webUrl: '',
      year: 0,
   },
   staff: [],
   isLoading: false,
   error: '',
}

const movieViewSlice = createSlice({
   name: 'itemView',
   initialState: initialState,
   reducers: {},
   extraReducers: {
      [fetchMovieByID.fulfilled.type]: (state, action: PayloadAction<responseDataType>) => {
         state.movie = action.payload.movie
         state.staff = action.payload.staff
         state.isLoading = false
      },
      [fetchMovieByID.pending.type]: (state) => {
         state.isLoading = true
      },
      [fetchMovieByID.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload
         state.isLoading = false
      },
   },
})

export default movieViewSlice.reducer