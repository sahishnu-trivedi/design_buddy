import React from 'react'

const Title = ({ children, as: Component = 'h2', classNameText }) => {
  return (
    <Component className={classNameText}>{children}</Component>
  )
}

export default Title