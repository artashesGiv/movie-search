import React from 'react'
import './App.css'
import {SearchPage} from './components/SearchPage/SearchPage'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MoviePage} from './components/ItemPages/MoviePage'


export const App: React.FC = () => {
   return (
      <div className={'container'}>
         <Routes>
            <Route path={'/'} element={<Navigate replace to={'search'}/>}/>
            <Route path={'/search'} element={<SearchPage/>}/>
            <Route path={'/film/:movieId'} element={<MoviePage/>}/>
         </Routes>
      </div>
   )
}



