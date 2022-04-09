    import React, {useState, useEffect} from 'react'
    import {Modal, Button} from "react-bootstrap"
    export default function CovidModal(props) {
        const [show, setShow] = useState(props.showModal);
        const [insideshow, setinsideShow] = useState(false);
        const handleClose = () => {
            console.log("click")
            setShow(false);}
        const handleShow = () => setShow(true);
        console.log(props)
        // console.log(show)
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
            {/* <button type="submit" onClick={handleShow}>Submit</button>  */}
            {/* <button type="submit" onClick={(e)=>results(values)}>Submit</button>  */}
              {/* <Button variant="primary" type="submit" onClick={handleShow}>
                Submit
              </Button> */}
        
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
                  <Button variant="primary" onClick={()=>props.setModalShow(false)}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
            // if (props.showModal){
            //     return (
            //         <>
            //         {/* <button type="submit" onClick={handleShow}>Submit</button>  */}
            //         {/* <button type="submit" onClick={(e)=>results(values)}>Submit</button>  */}
            //           {/* <Button variant="primary" type="submit" onClick={handleShow}>
            //             Submit
            //           </Button> */}
                
            //           <Modal show={props.showModal} onHide={handleClose}>
            //             <Modal.Header closeButton>
            //               <Modal.Title>Cornfirm Subssion</Modal.Title>
            //             </Modal.Header>
            //             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            //             <Modal.Footer>
            //               <Button variant="secondary" onClick={()=>props.setModalShow(false)}>
            //                  Cancel
            //               </Button>
            //               <Button variant="primary" onClick={()=>props.setModalShow(false)}>
            //                 Submit
            //               </Button>
            //             </Modal.Footer>
            //           </Modal>
            //         </>
            //       );
            // } 
            // // else if (){
            // //     return()
            // // }
            // else {
            //     return ("nothing")
            // }
       
      }