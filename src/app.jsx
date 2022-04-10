import { useState } from "react";
import {Route, Link, Switch, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import About from "./Pages/About/About"
import Dashboard from "./Pages/Dashboard/Dashboard"
import ExposureForm from "./Pages/ExposureForm/ExposureForm"
import Navbar from "./Components/Navigation/Navigation"
import "./styles.css";
import "./custom.scss"

export default function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/exposure" component={ExposureForm}/>
      <Route path="/dashboard" component={Dashboard}/>
      
      </Switch>
    </div>
  );
}
