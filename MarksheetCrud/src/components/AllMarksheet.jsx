import React from 'react'
import Marksheet from './Marksheet'
import TableHeader from './components/TableHeader'

const AllMarksheet = ({marksheets}) => {
  return (
    <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover text-center align-middle">
            <TableHeader />
            <tbody>
                {marksheets.map((marksheet)=> <Marksheet key={marksheet.id} marksheet={marksheet} />)}
            </tbody>
        </table>
    </div>
  )
}

export default AllMarksheet