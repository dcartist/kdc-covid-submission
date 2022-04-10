import { useState } from "react";
import {Route, Link, Switch, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import About from "./Pages/About/About"
import Dashboard from "./Pages/Dashboard/Dashboard"
import ExposureForm from "./Pages/ExposureForm/ExposureForm"
import Navbar from "./Components/Navigation/Navigation"
import Home from "./Pages/Home/Home"
import "./styles.css";
import "./custom.scss"

export default function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/exposure" exact component={ExposureForm}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      
      </Switch>
    </div>
  );
}
