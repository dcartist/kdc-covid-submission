    import React, {useState, useEffect} from 'react'
    import {Modal, Button} from "react-bootstrap"
    import axios from 'axios';
    export default function CovidModal(props) {
        const handleClose = () => {
        axios.post(`https://obscure-spire-94534.herokuapp.com/api/new`, props.data)
        .then(res => {
        setShow(false)
        props.setModalShow(false)
        props.setSubmitted(true)
          })
            }
        let details = [];
        let count = 0
        for (const property in props.data) {
            if(props.data[property].length !== 0){
              if(property == "school_role"){
                details.push(
                  <li key={count} className="list-group-item">
                    role: {props.data[property]}
                  </li>
                );
              }
               else if (property == "guardian_name"){
                details.push(
                  <li key={count} className="list-group-item">
                    guardian's name: {props.data[property]}
                  </li>
                );
              } 
               else if (props.data[property] == "false"){
                details.push(
                  <li key={count} className="list-group-item">
                    {property}: No
                  </li>
                );
              } 
               else if (props.data[property] == "true"){
                details.push(
                  <li key={count} className="list-group-item">
                    {property}: Yes
                  </li>
                );
              } 
              
              else {
                details.push(
                  <li key={count} className="list-group-item">
                    {property}: {props.data[property]}
                  </li>
                );
              }
                
            }
          
          count++
        }
        return (
            <>
          
        
              <Modal show={props.showModal} onHide={()=>props.setModalShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Cornfirm Subssion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ul className="list-group list-group-flush">

                {details}
</ul>
               
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={()=>props.setModalShow(false)}>
                     Edit Submission
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
          
      }


