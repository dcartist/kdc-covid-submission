    import React, {useState, useEffect} from 'react'
    import {Modal, Button} from "react-bootstrap"
    import axios from 'axios';
    export default function CovidModal(props) {
        const [show, setShow] = useState(props.showModal);
        const [insideshow, setinsideShow] = useState(false);
        const handleClose = () => {
        axios.post(`https://obscure-spire-94534.herokuapp.com/api/new`, props.data)
        .then(res => {
        setShow(false)
        props.setModalShow(false)
        props.setSubmitted(true)
          })
            }
        const handleShow = () => setShow(true);
        let details = [];
        let count = 0
        for (const property in props.data) {
            if(props.data[property].length !== 0){
                details.push(
                    <p key={count}>
                      {property}: {props.data[property]}
                    </p>
                  );
            }
          
          count++
        }
        return (
            <>
          
        
              <Modal show={props.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Cornfirm Subssion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {details}
               
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>props.setModalShow(false)}>
                     Cancel
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
          
      }


