import React from 'react'

const RecepieTemplate = (props) => {
  return (
    <div>
      <h4>Recepie: {props.params.title}</h4>
    </div>
  )
}

export default RecepieTemplate
