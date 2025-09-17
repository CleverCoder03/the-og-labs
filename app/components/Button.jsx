import React from 'react'

const Button = ({tag, className}) => {
  return (
    <button className={`${className} inline text-xs py-3 px-7 md:text-lg`}>
      {tag}
    </button>
  )
}

export default Button