import React from 'react'

function Tours({data, removeTour, index}) {
  return (
    <div>
        <img src={data.image} width="200" height="200"   /> 
        <button onClick={()=>removeTour(index)}>Not Interested</button>
    </div>
  )
}

export default Tours