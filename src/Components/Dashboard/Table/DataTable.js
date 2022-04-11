import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Table, Spinner} from "react-bootstrap"
import DashboardModal from "../Modal/DashboardModal"
export default function DataTable() {
    const [data, setData] = useState([])
    const [loadedResults, setLoaded] = useState(false)
    useEffect(async () => {
        const result = await axios(
          'https://obscure-spire-94534.herokuapp.com/api/',
        );
        setData(result.data.reverse());
      })
      
  return (
 <div>
{ data.length > 0 ? (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>email</th>
        <th>school</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item, index)=>
      (<tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td> {item.school_role} </td>
    </tr>)
    )}
     
    </tbody>
  </Table>
): (<div className="loading"><Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner> <h1>Loading...</h1></div>)}
 </div>
  )
}

