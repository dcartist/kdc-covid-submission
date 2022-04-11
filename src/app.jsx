import { useState, useEffect } from "react";
import {Route, Link, Switch, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import About from "./Pages/About/About"
import Dashboard from "./Pages/Dashboard/Dashboard"
import ExposureForm from "./Pages/ExposureForm/ExposureForm"
import Navbar from "./Components/Navigation/Navigation"
import Home from "./Pages/Home/Home"
import "./styles.css";

export default function App() {
  // useEffect(
  //   axios.get('https://obscure-spire-94534.herokuapp.com/api/').then((response) => {console.log("waking up")})
  // )

  return (
    <div className="App">
      <Navbar></Navbar>
<main className="app-spacing">
<Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/exposure" exact component={ExposureForm}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      
      </Switch>
</main>
    
    </div>
  );
}
