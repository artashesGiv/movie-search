import {AppDispatchType, AppStateType} from '../store/store'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'


export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector