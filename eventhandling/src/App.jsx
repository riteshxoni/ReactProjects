import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => {
  
  const msg = (data) => toast.loading(data,
    {
      duration:1000
    }
  );
  return (
    <>
      <Header notify={msg}></Header>
      <Container>
        <Main notify={msg}></Main>
        <Sidebar notify={msg}></Sidebar>
      </Container>
      <Footer notify={msg}></Footer>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App