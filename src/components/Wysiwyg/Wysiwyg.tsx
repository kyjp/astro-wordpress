import type { FC, ReactNode } from "react"
import "@wordpress/block-library/build-style/common.css"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

const Wysiwyg: FC<{ children: ReactNode }> = ({
  children
}) => {
  return (
    <div className="c-wysiwyg">
      { children }
    </div>
  )
}

export default Wysiwyg
