import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Students Matric Marksheet</h4>
        <Link to="/" className="btn btn-primary me-3">Home</Link>
        <Link to="/addMarksheet" className="btn btn-primary">+ Add Marksheet</Link>
    </div>
  )
}

export default Header