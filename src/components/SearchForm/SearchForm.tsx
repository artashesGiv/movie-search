import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import style from './SearchForm.module.scss'

type SearchProps = {
   search: (keyword: string) => void
   isLoading: boolean
}

export const SearchForm: React.FC<SearchProps> = React.memo(({search, isLoading}) => {

   const [value, setValue] = useState<string>('')
   const [labelValue, setLabelValue] = useState<string>('')

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
      setLabelValue('')
   }

   const sendKeyWords = () => {
      if (value.length > 0) {
         search(value)
      } else {
         setLabelValue('Введите название фильма')
      }
   }

   const onKeyPressInput = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && sendKeyWords()

   const disabledStyle = isLoading
      ? {
         backgroundColor: 'gray',
      }
      : {}

   return (
      <div className={style.form}>
         <div className={style.input}>
            <input id={'input'} type="text" value={value} onChange={onChangeInput}
                   onKeyPress={onKeyPressInput} placeholder={'Фильмы, сериалы'}/>
            <label htmlFor="input">{labelValue}</label>
         </div>
         <button disabled={isLoading} style={disabledStyle} onClick={sendKeyWords}>Поиск</button>
      </div>
   )
})
