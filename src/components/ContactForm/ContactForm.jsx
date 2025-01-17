import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import formStyles from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = ({ contactsArray }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactValues = {
    name: "",
    number: "",
  };

  const submitForm = (values, actions) => {
    const contactData = {
      id: nanoid(),
      ...values,
    };
    contactsArray(contactData);

    actions.resetForm();
  };

  const pattern = /^\d{3}-\d{2}-\d{2}$/;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(pattern, "Invalid phone number")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={contactValues}
      onSubmit={submitForm}
      validationSchema={FeedbackSchema}
    >
      <Form className={formStyles["form-block"]}>
        <div className={formStyles["input-block"]}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            style={{ padding: "8px 16px", borderRadius: 6 }}
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="name"
            component="span"
          />
        </div>
        <div className={formStyles["input-block"]}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xx-xx"
            style={{ padding: "8px 16px", borderRadius: 6 }}
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="number"
            component="span"
          />
        </div>
        <button className={formStyles["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
