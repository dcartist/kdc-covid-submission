import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Instructions } from "./Components/Instructions/instructions";
import "./styles.css";

export default function App() {


  return (
    <div className="App">
      <Instructions />

     
    </div>
  );
}
