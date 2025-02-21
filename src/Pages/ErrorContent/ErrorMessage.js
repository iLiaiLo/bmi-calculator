import React from 'react'

const ErrorMessage = ({errorMessage,displayContent}) => {
  return (
    <h1 style={{display:!displayContent?"block":"none"}} className="absolute bottom-1 text-red-700">{errorMessage}</h1>
  )
}

export default ErrorMessage