import React from 'react'
import ItemConter from './ItemConter'

const ItemListContainer = ({greeting, lorem, otrotitulo}) => {
  return (
    <div>
        <h1 className='tittle-1'>{greeting}</h1>
        <p className='tittle-2'>{lorem}</p>
        <ItemConter  otrotitulo={otrotitulo}/>
    </div>
  )
}

export default ItemListContainer