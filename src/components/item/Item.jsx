import React from 'react'
import { useState } from 'react';

const Item = ({title}) => {

  const [ initial , changeVal] = useState(title);
  
  
  const changeIt = () => {
    changeVal(title = "Updated")
    
    // console.log(title);  
    // console.log(initial);
  }


  return (
    <>
    
    <div className='parent-div'>
      <div className='div-inline'>{initial}</div>
      <button onClick={changeIt}>Change</button>
    </div>

    </>
  )
}

export default Item