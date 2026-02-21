import React from 'react'
import {Link} from 'react-router-dom';
const Marksheet = ({marksheet}) => {
  return (
    <tr>
        <td>{marksheet.id}</td>
        <td>{marksheet.name}</td>
        <td>{marksheet.roll}</td>
        <td>{marksheet.math}</td>
        <td>{marksheet.science}</td>
        <td>{marksheet.ssc}</td>
        <td>{marksheet.english}</td>
        <td>{marksheet.hindi}</td>
        <td>{marksheet.total}</td>
        <td>{marksheet.total / 5 + " %"}</td>
        <td>
            <Link to="/updateMarksheet" className="btn btn-sm btn-warning mb-2 mb-lg-0">Edit</Link>
            <Link to="/deleteMarksheet" className="btn btn-sm btn-danger ms-2" state={{m: marksheet}}>Delete</Link>
            <Link to="/showMarksheet" className="btn btn-sm btn-primary ms-2">Show</Link>
        </td>
    </tr>
  )
}


export default Marksheet