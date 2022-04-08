export const Instructions = () => (
  <div className="instructions">
    <p>
      <strong>Instructions: </strong> Imagine that you're building a form for
      ABC Public Schools that allows students and staff members to report a
      possible or confirmed COVID case. In a real application, we would save
      this information to a back end. Instead, you'll just display some
      information once the form has been submitted.
    </p>

    <p>
      This performance task is set up using React, and uses a form library
      called <a href="https://formik.org/docs/overview">Formik</a> and
      validation library called <a href="https://github.com/jquense/yup">Yup</a>
      , which we use at KIPP DC. If you're not familiar with these libraries,
      please spend a few minutes familiarizing yourself with them. You are
      welcome to add additional packages, or use an alternative implementation
      if you're more familiar with different libraries.
    </p>

    <p>
      <strong>Request</strong>: please create a form that allows students and
      staff members to alert ABC Schools of a possible COVID case. Currently,
      the form just asks for the person's name, and school. (ABC Schools has
      five schools - Aim Academy, Beyond Academy, Curiosity Academy, Discover
      Academy and Explore Academy.) If the person submitting the form is a
      student, also require their parent/guardian name, parent's phone number,
      and parent's email address. If the person is a staff member, require the
      staff members' phone number and email address. Additionally, the form
      should ask whether the person is experiencing symptoms or a confirmed
      positive case.
    </p>

    <p>
      Finally, when the person submits the form, show them their name, contact
      details, and whether they're experiencing symptoms or have a positive
      test.
    </p>

    <p>
      <strong>Criteria</strong>: a successful submission will have a
      user-friendly form. It should ensure that required fields are valid (I.E.,
      emails are valid emails - <a href="https://github.com/jquense/yup">Yup</a>{" "}
      can help with this) and required, and that non-relevant fields are hidden
      or de-emphasized. The confirmation should show the relevant information
      back to the user. Next, we'll be looking for clear, well-organized code.
      You may want to break app.jsx into multiple components/files to ensure
      your code is readable to your reviewers/coworkers. Visual design/CSS is
      less important - we use Bootstrap on several projects at KIPP DC - but you
      are welcome to make changes to ensure the form is visually appealling.
    </p>

    <p>
      To begin, fork this project and respond with a link to your final version.
      We anticipate that this should take approximately an hour or two to
      successfully complete.
    </p>

    <p>
      I recommend <i>removing this instruction component</i> when the
      performance task is complete.
    </p>
  </div>
);
