import React, {KeyboardEvent, useState} from 'react'
import style from './SearchForm.module.scss'

type SearchProps = {
   search: (key: string) => void
}

export const SearchForm: React.FC<SearchProps> = ({search}) => {

   const [value, setValue] = useState<string>('')

   const sendKeyWords = () => {
      search(value)
   }

   const onKeyPressInput = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && sendKeyWords()

   return (
      <div className={style.form}>
         <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}
                onKeyPress={onKeyPressInput} placeholder={'Фильмы, сериалы'}/>
         <button onClick={sendKeyWords}>Поиск</button>
      </div>
   )
}
