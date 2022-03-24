import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SignUp.module.scss';
import submitLeadInfo from 'utils/submitLeadInfo';
import Loader from '../../common/Loader';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
});

const SignUp = ({ audience }) => {
  const [submissionStatus, setSubmissionStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (user, { resetForm }) => {
    resetForm({ email: '' });
    setIsLoading(true);
    try {
      const contactId = await submitLeadInfo({
        ...user,
        action: 'Blog Opt In',
        category: audience,
      });
      setSubmissionStatus({ message: 'Submitted Successfully!' });
      submitGoalToGoogleTagManager({
        event: 'formSubmit',
        source: 'mainSite',
        type: 'blogOptIn',
      });
      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId: contactId,
      });
    } catch (error) {
      setSubmissionStatus({
        error: "Unfortunately we're unable to submit your email at this time",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <h3>
          Sign up to get more Real Estate related{' '}
          <br className="desktop-line-break" />
          Goodness right to your&nbsp;inbox.
        </h3>

        <Formik
          validateOnBlur={false}
          validateOnMount={false}
          validateOnChange={false}
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values }) => {
            if (isLoading) {
              return (
                <div className={styles['loading-wrapper']}>
                  <Loader />
                </div>
              );
            } else {
              return (
                <form
                  id="main-consultation-form"
                  className={styles['form']}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <input
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    name="email"
                  />
                  <div className={styles['button-wrapper']}>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              );
            }
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
