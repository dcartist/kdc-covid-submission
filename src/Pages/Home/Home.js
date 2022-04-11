import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import dog from "../../Images/dogsick.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Container fluid className="home-base mw-100">
        <Row className="align-items-center">
          <Col sm={8}>
            <Image src={`${process.env.PUBLIC_URL}/images/dogsick.jpg`} fluid></Image>
          </Col>
          <Col sm={4}>
            <p className="display-6">COVID CASE FORM</p>
            <p>
              Are you feeling sick, do you think you might have COVID, or have
              tested positive for COVID? Please notify us!
            </p>
            <Link to="/exposure">
              <Button>Submit a COVID case</Button>
            </Link>
            <hr></hr>

            <p className="display-6">COVID EXPOSURE DASHBOARD</p>
            <p>To view results please check out the COVID dashboard</p>

            <Link to="/dashboard">
              <Button>View COVID Dashboard</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
