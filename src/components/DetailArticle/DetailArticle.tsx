import { type FC, type ReactNode } from 'react'
import './style.sass'

const DetailArticle: FC<{children: ReactNode}> = ({
  children
}) => {
  return (
    <article className="deatil-wrapper">
      {children}
    </article>
  )
}

export default DetailArticle
