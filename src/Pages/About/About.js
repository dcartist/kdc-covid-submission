import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import dog from "../../Images/puppysick.jpg"
export default function About() {
  return (
   <>
   <Container>
  <Row className="pt-4">
    <Col sm={8}> <Image src="https://kdc-covid-submission-dcartist.vercel.app/images/puppysick.jpg" fluid></Image></Col>
    <Col sm={4}>
      <h1>About</h1>
      <hr></hr>
      <p>ABC schools is a code challenge that was created over one weekend. </p>
      <p>The challenge was to complete a form that someone could fill out if there were staff or a student. If they are a student, they must enter their guardian's name and details. The form has validation on every field to make sure something was checked. Email also makes sure it's a valid email address before submitting.</p>
      <p>When submitting, a modal is triggered to review your information. If the data is correct, it is saved to an API which can be viewed in the dashboard.</p>
      </Col>
  </Row>
  <Row>
    <Col>
      <h2 className="mb-4">ABC school was created with:</h2></Col>
  </Row>
  <Row>
    <Col>
    <h4>Front End</h4>
      <ul className="list-group list-group-flush mb-5">
  <li className="list-group-item">React</li>
  <li className="list-group-item">React Bootstrap</li>
  <li className="list-group-item">Bootstrap</li>
  <li className="list-group-item">Formik</li>
  <li className="list-group-item">Yup</li>
  <li className="list-group-item">Axios</li>
</ul>
    </Col>
    <Col>
    <h4>Back End</h4>
      <ul className="list-group list-group-flush">
  <li className="list-group-item">Express</li>
  <li className="list-group-item">Mongo/Mongoose</li>
  <li className="list-group-item">Cors</li>
  <li className="list-group-item">Faker JS</li>
  <li className="list-group-item">Heroku</li>
</ul>
    </Col>
    </Row>
</Container>
   </>
  )
}
