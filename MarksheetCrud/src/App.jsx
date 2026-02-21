import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/Container'
import Header from './components/components/Header'
import AllMarksheet from './components/AllMarksheet'
import AddMarksheet from './components/AddMarksheet'
import UpdateMarksheet from './components/UpdateMarksheet'
import DeleteMarksheet from './components/DeleteMarksheet'
import ShowMarksheet from './components/ShowMarksheet'
import Footer from './components/components/Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

const App = () => {

  const [marksheets, setMarksheets] = useState(
    [
      {
        id: 1,
        name: "Rohit Kumar",
        roll: 101,
        math: 78,
        science: 82,
        ssc: 75,
        english: 80,
        hindi: 74,
        total: 389
      },
      {
        id: 2,
        name: "Anjali Singh",
        roll: 102,
        math: 88,
        science: 90,
        ssc: 85,
        english: 87,
        hindi: 83,
        total: 433
      },
      {
        id: 3,
        name: "Amit Verma",
        roll: 103,
        math: 69,
        science: 72,
        ssc: 70,
        english: 68,
        hindi: 71,
        total: 350
      },
      {
        id: 4,
        name: "Priya Kumari",
        roll: 104,
        math: 92,
        science: 89,
        ssc: 91,
        english: 90,
        hindi: 88,
        total: 450
      }
    ]
  );

  return (
    <BrowserRouter>
      <Container>
          <Header />
          <Routes>
              <Route path="/" element={<AllMarksheet marksheets={marksheets} />} />
              <Route path="/addMarksheet" element={<AddMarksheet marksheets={marksheets} setMarksheets={setMarksheets} />} />
              <Route path="/showMarksheet" element={<ShowMarksheet/>} />
              <Route path="/updateMarksheet" element={<UpdateMarksheet />} />
              <Route path="/deleteMarksheet" element={<DeleteMarksheet marksheets={marksheets} setMarksheets={setMarksheets} />} />
          </Routes>
          <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App