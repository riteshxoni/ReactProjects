import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
const App = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async ()=>
  {
    try
    {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    catch(err)
    {
      console.error(err)
    }
      
  }

  useEffect( ()=>{

    let getData = ()=>
    {
      getProducts();
    }
    getData();

  },[]);


  return (
    <div className='table-responsive text-capitalize text-center my-4'>
      <h1 className='my-3'>Your Products</h1>
      {/* <button className='mb-2 btn btn-primary rounded-4' onClick={getProducts}>Get Products</button> */}
      <table className='table table-bordered table-hover table-striped table-striped-columns'>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>rating</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) =>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate +" And "+ product.rating.count}</td>
                <td><img src={product.image} alt="" height={'50px'} width={'50px'} /></td>
              </tr>
            )
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default App