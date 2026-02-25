import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Container from './components/Container'
const App = () => 
{
  const [products, setProducts] = useState([]);

  const getProducts = async ()=>
  {
    let response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
  useEffect(()=>{
    let getData = async () =>
    {
        let data = await getProducts();
        setProducts(data);
    }
    getData();
  },[]);
  return (
    <>
      <Container products={products} />
    </>
  )
}

export default App