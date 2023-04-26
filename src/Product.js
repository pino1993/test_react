import React from 'react'

const Product = ({nome,img,prezzo}) => {
    const alt = 'valore';
  return (
    <article>
        <div className='card'>
            <img src={img} alt={alt}></img>
            <h6>{nome}</h6>
            <hr/>
            <p>{prezzo}$</p>
            <button>{prezzo}</button>

        </div>
    </article>
  )
}

export default Product;