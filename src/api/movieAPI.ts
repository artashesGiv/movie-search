import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://kinopoiskapiunofficial.tech/api/',
   headers: {
      'X-API-KEY': '165e7b38-8ffc-4808-995e-a7ff5d225a5a',
      'Content-Type': 'application/json',
   },
})

export const movieAPI = {
   getMovieByID(movieID: string) {
      return instance.get(`/v2.2/films/${movieID}`)
         .then(res => res.data)
   },

   getMoviePostersByID(movieID: string) {
      return instance.get(`/v2.2/films/${movieID}/images`)
   },

   getMovieByKeyWords(key: string) {
      return instance.get(`/v2.1/films/search-by-keyword?keyword=${key}&page=1`)
         .then(res => res.data)
   },
}