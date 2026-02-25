import Products from './Products'
import NotFound from './NotFound'
const Container = ({products}) => {

  return (
    <div className='col-10 col-md-10 container my-3'>
        {products.length ? <Products products={products} /> : <NotFound/>}
    </div>
  )
}

export default Container