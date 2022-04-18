export type responseDataMovieSearchByKeyword = {
   films: movie[]
   keyword: string
   pagesCount: number
   searchFilmsCountResult: number
}

export type movie = {
   countries: {
      country: string
   }[]
   description: string
   filmId: number
   filmLength: string
   genres: {
      genre: string
   }[]
   nameEn: string
   nameRu: string
   posterUrl: string
   posterUrlPreview: string
   rating: string
   ratingVoteCount: number
   type: string
   year: string
}


export type responseDataMovieByID = {
   completed: false
   countries: {
      country: string
   }[]
   coverUrl: string
   description: string
   editorAnnotation: string
   endYear: number
   filmLength: number
   genres: {
      genre: string
   }[]
   has3D: boolean
   hasImax: boolean
   imdbId: string
   isTicketsAvailable: boolean
   kinopoiskId: number
   lastSync: string
   logoUrl: string
   nameEn: string
   nameOriginal: string
   nameRu: string
   posterUrl: string
   posterUrlPreview: string
   productionStatus: string
   ratingAgeLimits: string
   ratingAwait: number
   ratingAwaitCount: number
   ratingFilmCritics: number
   ratingFilmCriticsVoteCount: number
   ratingGoodReview: number
   ratingGoodReviewVoteCount: number
   ratingImdb: number
   ratingImdbVoteCount: number
   ratingKinopoisk: number
   ratingKinopoiskVoteCount: number
   ratingMpaa: string
   ratingRfCritics: number
   ratingRfCriticsVoteCount: number
   reviewsCount: number
   serial: false
   shortDescription: string
   shortFilm: false
   slogan: string
   startYear: number
   type: string
   webUrl: string
   year: number
}

export type person = {
   description: string
   nameEn: string
   nameRu: string
   posterUrl: string
   professionKey: string
   professionText: string
   staffId: number
}