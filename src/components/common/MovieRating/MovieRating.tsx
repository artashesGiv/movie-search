import React from 'react'

export const MovieRating: React.FC<{ rating: number, type?: 'large' | 'normal' | 'small' }> = ({
                                                                                                  rating,
                                                                                                  type = 'large',
                                                                                               }) => {
   const style = {
      fontSize: type === 'large' ? '40px' : type === 'normal' ? '20px' : '15px',
      color: rating > 7 ? '#3bb33b' : rating > 5 ? '#777777' : '#ff0000',
      fontWeight: type === 'small' ? '400' : 'bold',
   }
   return (
      <>
         {
            rating ? <span style={style}>{rating}</span> : false
         }
      </>
   )
}
