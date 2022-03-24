import { useState } from 'react';
import styles from './BlogCta.module.scss';
import RelatedPost from 'components/common/RelatedPost';
import { Envelope, CaretDown } from '@styled-icons/boxicons-regular';
import DefaultButton from 'components/common/DefaultButton';
import submitLeadInfo from 'utils/submitLeadInfo';
import Loader from 'components/common/Loader';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import { Formik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
});

export const SignupCta = ({ audience, isDesktop }) => {
  const [submissionStatus, setSubmissionStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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
      console.log(error);
      setSubmissionStatus({
        error: "Unfortunately we're unable to submit your email at this time",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const desktopHeading = (
    <h3>
      Sign up to get more Real Estate related Goodness right to your&nbsp;inbox.
    </h3>
  );
  const mobileHeading = <h3>Sign up for more awesome content.</h3>;

  return (
    <div className={clsx(styles['container'], isHidden && styles['is-hidden'])}>
      <div
        className={styles['icon-wrapper']}
        onClick={() => setIsHidden(!isHidden)}
      >
        {isDesktop ? <Envelope size={60} /> : <CaretDown />}
      </div>

      {isDesktop ? desktopHeading : mobileHeading}

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

                <DefaultButton label="Submit" type="submit" variant="primary" />
              </form>
            );
          }
        }}
      </Formik>
    </div>
  );
};

export const RelatedArticles = ({ relatedPosts, path }) => {
  return (
    <div className={styles['related-container']}>
      <h3>You might also find interesting:</h3>
      {relatedPosts.map(post => (
        <RelatedPost path={path} key={post.slug} post={post} />
      ))}
    </div>
  );
};
