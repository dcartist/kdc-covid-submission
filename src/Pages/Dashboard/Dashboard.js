import React from 'react'
import DataTable from "../../Components/Dashboard/Table/DataTable"
export default function Dashboard() {
  return (
    <div>
      <div className="text-center">
      <h1> COVID Case Submissions</h1>
      <hr></hr>
      <p>The data for this page is stored in a hand-crafted express/mongodb API</p>
      </div>

        <DataTable></DataTable>
    </div>
    
  )
}
