import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import Loader from '../../Components/Loader/Loader';

interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, '*Full Name must be at least 2 characters long')
      .required('*Full Name is required'),
    email: Yup.string()
      .email('*Invalid email address')
      .required('*Email is required'),
    subject: Yup.string()
      .min(5, '*Subject must be at least 5 characters long')
      .required('*Subject is required'),
    message: Yup.string()
      .min(10, '*Message must be at least 10 characters long')
      .required('*Message is required'),
  });

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mldennja', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success('Message sent successfully');
        setFormSent(true);
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      toast.error('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          subject: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="input-box">
            <Field
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <ErrorMessage name="fullName" component="div" className="error-message" />
          </div>

          <div className="input-box">
            <Field
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="input-box">
            <Field
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
            />
            <ErrorMessage name="subject" component="div" className="error-message" />
          </div>

          <div className="input-box">
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              required
            />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <input type="submit" value={loading ? 'Sending...' : 'Send Message'} className="btn" disabled={loading} />
        </Form>
      </Formik>

      {loading && <Loader/>}
      <ToastContainer position="bottom-right" className="custom-toast" />
    </section>
  );
};

export default Contact;
