import React from 'react'

export default function Liste({index,elemnt,removeInListe}) {
  return (
    <div key={index}>
         { elemnt.task }
        <button onClick={() => removeInListe(index)}>X</button>
    </div>
  )
}
