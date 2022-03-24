import { useContext, useState } from 'react';
import { ModalContext } from '../../../../contexts/ModalContext';
import TextInput from '../../TextInput';
import DefaultButton from '../../DefaultButton';
import ModalTemplate from '../common/ModalTemplate';
import { Rating } from '@material-ui/lab';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';
import { AuthContext } from 'contexts/AuthContext';
import getGAClientId from 'utils/getGAClientId';
import axios from 'axios';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import ModalTitle from '../common/ModalTitle';
import ModalCopy from '../common/ModalCopy';
import Spacer from 'components/common/Spacer';

const reviewSchema = Yup.object().shape({
  review: Yup.string()
    .required('Please add your review')
    .min(50, 'Must be at least 50 characters long'),
  starCount: Yup.number()
    .required('Please add your rating')
    .typeError('Please add your rating'),
});

const submitReview = async values => {
  try {
    const { data: newReview } = await axios.post(
      '/api/locations/review',
      values
    );
    return newReview;
  } catch (error) {
    throw error;
  }
};

const LocationReviewModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { setLocationReviewModalInfo, locationReviewModalInfo } = useContext(
    ModalContext
  );
  const { user } = useContext(AuthContext);

  const newlocationReviewModalInfo = {
    isOpen: false,
    locationName: null,
    locationSlug: null,
  };

  const handleSubmit = async values => {
    try {
      setIsLoading(true);

      const newReview = {
        userId: user.id,
        body: values.review,
        locationSlug: locationReviewModalInfo.locationSlug,
        starCount: values.starCount,
      };
      await submitReview(newReview);

      const clientId = await getGAClientId();

      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId,
      });

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data.msg || null;
      if (errorMessage === 'duplicate') {
        setError("Looks like you've already reviewed this location.");
      } else {
        setError('Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setLocationReviewModalInfo(newlocationReviewModalInfo);
    setError('');
  };

  const Success = ({ locationName, handleClose }) => {
    return (
      <div>
        <ModalTitle size="xxl">
          Thanks for submitting your review on {locationName}
        </ModalTitle>
        <ModalCopy>We'll review and publish it shortly</ModalCopy>

        <Spacer m="m" />

        <DefaultButton variant="primary" onClick={handleClose} label="Ok" />
      </div>
    );
  };

  return (
    <ModalTemplate
      isOpen={locationReviewModalInfo.isOpen}
      handleClose={handleClose}
      color="blue"
      image="/images/blue-house-bg.png"
      isLoading={isLoading}
    >
      {!isLoading && (
        <>
          {isSuccess && (
            <Success
              handleClose={handleClose}
              locationName={locationReviewModalInfo.locationName}
            />
          )}

          {!isSuccess && (
            <>
              <ModalCopy>Submit a review for:</ModalCopy>
              <ModalTitle leftAlign>
                {locationReviewModalInfo.locationName}
              </ModalTitle>

              <Formik
                validateOnBlur={false}
                validateOnMount={false}
                validateOnChange={false}
                initialValues={{
                  starCount: null,
                  review: '',
                }}
                validationSchema={reviewSchema}
                onSubmit={async values => {
                  handleSubmit(values);
                }}
              >
                {({
                  values,
                  errors,
                  setFieldValue,
                  handleSubmit,
                  handleChange,
                }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <ModalCopy>
                        How would you rate{' '}
                        {locationReviewModalInfo.locationName}?
                      </ModalCopy>

                      <Rating
                        value={values.starCount}
                        onChange={(event, newValue) => {
                          setFieldValue('starCount', newValue);
                        }}
                      />
                      {/* </div> */}
                      <FormHelperText error>{errors.starCount}</FormHelperText>

                      <TextInput
                        name="review"
                        placeholder={`Tell us about ${locationReviewModalInfo.locationName}`}
                        multiline
                        rows={5}
                        onChange={handleChange}
                      />
                      <FormHelperText error>{errors.review}</FormHelperText>

                      <Spacer m="m" />

                      <DefaultButton
                        type="submit"
                        label="Submit Your Review"
                        variant="primary"
                      />

                      <FormHelperText error>{error}</FormHelperText>
                    </form>
                  );
                }}
              </Formik>
            </>
          )}
        </>
      )}
    </ModalTemplate>
  );
};

export default LocationReviewModal;
