import React from 'react'
import { useLocation } from "react-router-dom";

const DeleteMarksheet = ({marksheets, setMarksheets}) => {

  const location = useLocation();
  const marksheet = location.state?.m;

  let deleteMarksheet = ()=>
  {
      let newMarksheets = marksheets.filter(m => !(m.id === marksheet.id));
      
      setMarksheets(newMarksheets);
  }

  return (
    <div className="container mt-4">
  <div className="card shadow">
    <div className="card-header bg-primary text-white">
      <h5 className="mb-0">Delete Marksheet</h5>
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
              value={marksheet?.id}
            />
          </div>

          <div className="col-md-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Student Name"
              value={marksheet?.name}
            />
          </div>

          <div className="col-md-5">
            <label className="form-label">Roll</label>
            <input
              type="number"
              name="roll"
              className="form-control"
              placeholder="Roll Number"
              value={marksheet?.roll}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Math</label>
            <input readOnly={true}
              type="number"
              name="math"
              className="form-control"
              placeholder="Math Marks"
              value={marksheet?.math}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Science</label>
            <input readOnly={true}
              type="number"
              name="science"
              className="form-control"
              placeholder="Science Marks"
              value={marksheet?.science}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">S.Sc</label>
            <input readOnly={true}
              type="number"
              name="ssc"
              className="form-control"
              placeholder="S.Sc Marks"
              value={marksheet?.ssc}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">English</label>
            <input readOnly={true}
              type="number"
              name="english"
              className="form-control"
              placeholder="English Marks"
              value={marksheet?.english}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Hindi</label>
            <input readOnly={true}
              type="number"
              name="hindi"
              className="form-control"
              placeholder="Hindi Marks"
              value={marksheet?.hindi}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Total</label>
            <input readOnly={true}
              type="number"
              name="total"
              className="form-control"
              placeholder="Total Marks"
              value={marksheet?.total}
            />
          </div>

        </div>

        <div className="mt-4 text-end">
          <button type="button" onClick={deleteMarksheet}  className="btn btn-danger">Delete Marksheet</button>
        </div>

      </form>
    </div>
  </div>
    </div>
  )
}

export default DeleteMarksheet