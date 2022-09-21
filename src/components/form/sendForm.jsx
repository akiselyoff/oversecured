import { Formik, Field, Form } from 'formik';

const sendForm = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        email: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="secondName">Last Name</label>
        <Field id="secondName" name="secondName" placeholder="Doe" />

        <label htmlFor="entryMoment">Email</label>
        <Field id="entryMoment" name="entryMoment" placeholder="entry moment" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default sendForm;
