import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function CovidForm() {
      // Track whether the form has been submitted by the user
  const [submitted, setSubmitted] = useState(false);
  // You may need additional calls to useState to confirm the submitted data.
  function results(data){
    console.log(data)
  }
  return (
    <div>
        
        <h1>COVID Case Submission</h1>
      <p>Submit this form to alert ABC Schools to a possible COVID case.</p>
      {!submitted ? (
        <Formik
          initialValues={
            // TO-DO
            // Update the initial values object below to include all possible form fields,
            // and to set any default values, if necessary
            // https://formik.org/docs/api/formik#initialvalues-values
            { name: "", school: "", phone: "", email: "", school_role: "", guardian_name: ""}
          }
          validationSchema={
            // TO-DO
            // Update this schema to handle all the possibly required form fields
            // Conditional validation in Yup: https://stackoverflow.com/questions/49394391/conditional-validation-in-yup
            Yup.object({
              name: Yup.string().required("Required"),
              school: Yup.string().required("Required"),
              phone: Yup.string().required("Required"),
              school_role: Yup.string().required("Required"),
              email: Yup.string().email().required("You must have a valid email"),
              guardian_name: Yup.string().when('school_role', {
                is: 'student',
                then: Yup.string()
                  .required('You must enter guardian`s name'),
              })
            })
          }
          onSubmit={(values) => {
            // TO-DO
            // Update this to handle a successful form
            // Make sure we can display the submitted values back to the user
            // In a real app we'd save to the database here.
            setSubmitted(true);

            // Delete this alert when your implementation is complete.
            window.alert(JSON.stringify(values));
          }}
        >
          {
            // Other available formik props: https://formik.org/docs/api/formik#props-1
            // You can use the values prop to conditionally display content. For example:
            // {values.name === 'Bob' && <p>Hi Bob!</p>}
            ({ values, errors, isSubmitting }) => (
              <Form>
                <div>
                  <label>Name: </label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <br />

                <div>
                  <label>School: </label>
                  <Field as="select" name="school">
                    <option />
                    <option>Aim Academy</option>
                    <option>Beyond Academy</option>
                    <option>Curiousity Academy</option>
                    <option>Discover Academy</option>
                    <option>Explore Academy</option>
                  </Field>
                  <ErrorMessage
                    name="school"
                    component="div"
                    className="error"
                  />
                </div>
                <br />

                <div role="group" aria-labelledby="rolegroup">
            <label>
              <Field type="radio" name="school_role" value="student" />
              Student
            </label>
            <label>
              <Field type="radio" name="school_role" value="staff" />
              Staff
            </label>
            <ErrorMessage name="school_role" component="div" />
          </div>

          { values.school_role == "student" && (
            <div>
            <label>Guardian Name: </label>
            <Field type="text" name="guardian_name" />
            <ErrorMessage name="guardian_name" component="div" />
          </div>
          )

          }

                <br />
                <div>
                  <label>{values.school_role == "student"  && <span>Guardian</span> } Phone:  </label>
                  <Field type="text" name="phone" />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <br></br>
                <div>
                  <label>{values.school_role == "student"  &&  <span>Guardian</span> } Email:  </label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <br></br>
                <div>
                  <button type="submit" onClick={(e)=>results(values)}>Submit</button>
                </div>
              </Form>
            )
          }
        </Formik>
      ) : (
        <>
          {/* TO-DO
              Show the user their submitted data and quarantine end date
              once the form has been submitted.
          */}
          <div>
            <p>Form submitted!</p>
          </div>
        </>
      )}
    </div>
  )
}
