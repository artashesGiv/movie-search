import {combineReducers, configureStore} from '@reduxjs/toolkit'
import searchSlice from './reducers/search/searchSlice'
import itemViewSlice from './reducers/movieViewReducer/movieViewSlice'

const rootReducer = combineReducers({
   searchSlice,
   itemViewSlice,
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   })
}

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']