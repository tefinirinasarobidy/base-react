import React, { useEffect } from 'react'
// rafce
const Child = ({inp,declencher}) => {
  useEffect(() =>{
    // tiger when comonent will remove
    return (() => console.log('demonter'))
  },[])
  return (
    <>
        <div>compenent enfant {inp}</div>
        <button onClick={() => declencher()}>clicker</button>
    </>
  )
}

export default Child