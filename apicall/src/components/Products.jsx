import React from 'react'
import Product from './Product'
const Products = ({products}) => {
  return (
    <div className='row justify-content-center g-4'>
      {products.map((item, index) => <Product key={index} item={item}/>)}
    </div>
  )
}

export default Products