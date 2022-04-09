import { useState } from "react";
import {Route, Link, Switch, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import About from "./Pages/About/About"
import ExposureForm from "./Pages/ExposureForm/ExposureForm"
import "./styles.css";


export default function App() {


  return (
    <div className="App">
      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/exposure" component={ExposureForm}/>
      
      </Switch>
    </div>
  );
}
