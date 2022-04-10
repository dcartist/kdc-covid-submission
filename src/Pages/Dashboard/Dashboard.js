import React from 'react'
import DataTable from "../../Components/Table/DataTable"
export default function Dashboard() {
  return (
    <div>
      <div className="text-center">
      <h1 > Covid Case Submissions</h1>
      <p>The data for this page is stored in a handcreated express/mongodb API</p>
      </div>

        <DataTable></DataTable>
    </div>
    
  )
}
