import { type FC, type ReactNode } from 'react'
import './style.sass'

const Title: FC<{children: ReactNode}> = ({children}) => {
  return (
    <h1 className="c-title">{children}</h1>
  )
}

export default Title
