import React from 'react'

const Text = ({ children, classNameText }) => {
  return (
    <p className={`mb-2 leading-relaxed text-lg ${classNameText}`}>{children}</p>
  )
}

export default Text