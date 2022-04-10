import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import dog from "../../Images/dogsick.jpg"
import {Link} from "react-router-dom"
export default function Home() {
  return (
<>  
<Container fluid>
  <Row className="align-items-center">
    <Col sm={8}><Image src={dog} fluid></Image></Col>
    <Col sm={4} > 
    <h1 className="display-1">Feeling sick or</h1>
    <h2>you think you might have COVID?</h2>
    <p className="display-6">Please notify us!</p>
    <Link to="/exposure"><Button>Click here to notify us</Button></Link>
    </Col>
  </Row>
</Container>
</>
  )
}
