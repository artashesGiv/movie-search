import axios from 'axios'
import {
   distribution,
   movieDataResponseById,
   movieSearchDataResponseById,
   person,
   responseDataMovieById,
   video,
} from '../types/types'

const instance = axios.create({
   baseURL: 'https://kinopoiskapiunofficial.tech/api/',
   headers: {
      'X-API-KEY': '165e7b38-8ffc-4808-995e-a7ff5d225a5a',
      'Content-Type': 'application/json',
   },
})

export const movieAPI = {
   getMovieByID(movieID: string) {
      return instance.get<movieDataResponseById>(`v2.2/films/${movieID}`)
         .then(res => res.data)
   },

   getMovieVideoByID(movieID: string) {
      return instance.get<responseDataMovieById<video>>(`v2.2/films/${movieID}/videos`)
         .then(res => res.data.items)
   },

   getStaffByMovieID(movieID: string) {
      return instance.get<person[]>(`v1/staff?filmId=${movieID}`)
         .then(res => res.data)
   },

   getDistributionsDataByID(movieID: string) {
      return instance.get<responseDataMovieById<distribution>>(`v2.2/films/${movieID}/distributions`)
         .then(res => res.data.items)
   },

   getMoviesByKeyWords(key: string, pageNumber: number) {
      return instance.get<movieSearchDataResponseById>(`v2.1/films/search-by-keyword?keyword=${key}&page=${pageNumber.toString()}`)
         .then(res => res.data)
   },
}