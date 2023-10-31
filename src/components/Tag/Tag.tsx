import { type FC } from 'react'
import './style.sass'

const Tag: FC<{obj: any}> = ({
  obj
}) => {
  return (
    <ul className="c-tag">
      {obj.map((tag: any) => <li>{tag.name}</li>)}
    </ul>
  )
}

export default Tag
