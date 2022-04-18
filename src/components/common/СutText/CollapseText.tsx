import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'

// типы дефолтных пропсов
type DefaultParagraphPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

type CollapseTextPropsType = DefaultParagraphPropsType & {
   text: string
   maxLength?: number
   toExpand?: () => void
}

export const CollapseText: React.FC<CollapseTextPropsType>
   = React.memo(({
                    text,
                    maxLength = 400,
                    className,
                    ...restProps
                 }) => {

   let visibleText = text
      ? text.slice(0, maxLength)
      : text
   if (visibleText?.length < text?.length) {
      visibleText += '...'
   }

   return (
      <p className={className} {...restProps}>
         {visibleText}
      </p>
   )
})
