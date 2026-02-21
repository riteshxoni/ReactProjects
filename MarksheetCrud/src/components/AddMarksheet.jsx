import React from 'react'
import { useState } from 'react';

const AddMarksheet = ({marksheets, setMarksheets}) => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [ssc, setSsc] = useState("");
  const [english, setEnglish] = useState("");
  const [hindi, setHindi] = useState("");
  const [total, setTotal] = useState("");

  const handleChange = (e) => 
  {
    const { name, value } = e.target;

    if (name === "id") 
      setId(value);
    else if (name === "name") 
      setName(value);
    else if (name === "roll") 
      setRoll(value);
    else if (name === "math") 
      setMath(value);
    else if (name === "science") 
      setScience(value);
    else if (name === "ssc") 
      setSsc(value);
    else if (name === "english") 
      setEnglish(value);
    else if (name === "hindi") 
      setHindi(value);
    else if (name === "total") 
      setTotal(value);
  };

  const handleSubmit = () => {
    const data = { id, name, roll, math, science, ssc, english, hindi, total };

    const newMarksheets = [...marksheets, data];
    setMarksheets(newMarksheets);
  };



  return (
  <div className="container mt-4">
  <div className="card shadow">
    <div className="card-header bg-primary text-white">
      <h5 className="mb-0">Add Student Marksheet</h5>
    </div>

    <div className="card-body">
      <form>

        <div className="row g-3">

          <div className="col-md-2">
            <label className="form-label">#</label>
            <input
              type="number"
              name="id"
              className="form-control"
              placeholder="ID"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Student Name"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-5">
            <label className="form-label">Roll</label>
            <input
              type="number"
              name="roll"
              className="form-control"
              placeholder="Roll Number"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Math</label>
            <input
              type="number"
              name="math"
              className="form-control"
              placeholder="Math Marks"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Science</label>
            <input
              type="number"
              name="science"
              className="form-control"
              placeholder="Science Marks"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">S.Sc</label>
            <input
              type="number"
              name="ssc"
              className="form-control"
              placeholder="S.Sc Marks"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">English</label>
            <input
              type="number"
              name="english"
              className="form-control"
              placeholder="English Marks"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Hindi</label>
            <input
              type="number"
              name="hindi"
              className="form-control"
              placeholder="Hindi Marks"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Total</label>
            <input
              type="number"
              name="total"
              className="form-control"
              placeholder="Total Marks"
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="mt-4 text-end">
          <button type="reset" className="btn btn-secondary me-2">Reset</button>
          <button type="button" onClick={handleSubmit} className="btn btn-success">Save Marksheet</button>
        </div>

      </form>
    </div>
  </div>
    </div>
  )
}

export default AddMarksheet