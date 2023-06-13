import React from 'react'
import Item from '../item/Item'

const List = () => {

  const arr = ["Item 1" , "Item 2" , "Item 3"]; 

  const items = arr.map((item , index) =>{
    return <Item key={"no-"+index} title={item}/>
  })

  return (
    <>
      <div>List Component Render</div>
      {items}


    {/* Hard Coaded but another is Dynamically through array . */}

      {/* <Item title={arr[1]}/>
      <Item title={arr[2]}/> */}
    </>
  )
}

export default List