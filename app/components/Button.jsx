import React from 'react'

const Button = ({tag,type, className}) => {
  return (
    <button className={`${className} inline text-xs py-3 px-7 md:text-lg`} type={type}>
      {tag}
    </button>
  )
}

export default Button