import React from 'react'

const ShadowBox = ({ children, classText}) => {
  return (
    <div className={`shadow-white ${classText}`}>
        {children}
    </div>
  )
}

export default ShadowBox