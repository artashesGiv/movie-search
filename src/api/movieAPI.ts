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
      return instance.get(`v2.2/films/${movieID}`)
         .then(res => res.data)
   },

   getMovieVideoByID(movieID: number) {
      return instance.get(`v2.2/films/${movieID.toString()}/video`)
         .then(res => res.data)
   },

   getMoviesByKeyWords(key: string, pageNumber: number) {
      return instance.get(`v2.1/films/search-by-keyword?keyword=${key}&page=${pageNumber.toString()}`)
         .then(res => res.data)
   },

   getStaffByMovieID(movieID: string) {
      return instance.get(`v1/staff?filmId=${movieID}`)
         .then(res => res.data)
   }
}