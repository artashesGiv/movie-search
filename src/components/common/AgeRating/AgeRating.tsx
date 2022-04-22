import React from 'react'

export const AgeRating: React.FC<{ rating: string, type?: string, color?: string }> = ({rating}) => {

   const style = {
      border: '1px solid gray',
      borderRadius: '2px',
      padding: '0 2px',
      fontSize: '12px',
   }

   return (
      <>
         {
            rating &&
           <span style={style}>
               {/*@ts-ignore*/}
              {[...rating].map(i => isFinite(i) ? i : '').join('') + ' +'}
           </span>
         }
      </>
   )
}