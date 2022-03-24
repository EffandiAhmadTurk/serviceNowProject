import { useState, useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { FormHelperText, Grid } from '@material-ui/core';
import ModalTemplate from '../common/ModalTemplate';
import TextInput from '../../TextInput';
import DefaultButton from '../../DefaultButton';
import PhoneInput from 'components/common/PhoneInput';
import { ModalContext } from 'contexts/ModalContext';
import { AuthContext } from 'contexts/AuthContext';
import submitLeadInfo from 'utils/submitLeadInfo';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import Select from 'components/common/Select';
import Spacer from 'components/common/Spacer';
import ModalTitle from '../common/ModalTitle';
import ModalCopy from '../common/ModalCopy';
import ModalSuccess from '../common/ModalSuccess';

const ChatModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { setIsLetsChatModalOpen, isLetsChatModalOpen } =
    useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = async userInfo => {
    try {
      setIsLoading(true);

      const contactId = await submitLeadInfo({
        ...userInfo,
        id: user?.id,
        action: 'Booked Consultation',
      });
      submitGoalToGoogleTagManager({
        event: 'formSubmit',
        source: 'mainSite',
        type: 'consultation',
      });

      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId: contactId,
      });

      setIsLoading(false);
      setIsFinished(true);
    } catch (error) {
      setIsLoading(false);
      setRequestError(
        "Unfortunately we're unable to receive your request at the moment"
      );
    }
  };

  return (
    <ModalTemplate
      isOpen={isLetsChatModalOpen}
      handleClose={() => setIsLetsChatModalOpen(false)}
      color="green"
      image="/images/green-house-bg.png"
      isLoading={isLoading}
    >
      {!isLoading && (
        <>
          {!isFinished ? (
            <>
              <ModalTitle>Let's Chat</ModalTitle>

              <ModalCopy>
                Interested in learning more about buying or selling? Chat with a
                felix expert today!
              </ModalCopy>

              <Spacer m="s" />

              <ConsultationForm
                setIsFinished={setIsFinished}
                setRequestError={setRequestError}
                requestError={requestError}
                handleSubmit={handleSubmit}
                firstName={user?.firstName}
                lastName={user?.lastName}
                email={user?.email}
                phoneNumber={user?.phoneNumber}
              />
            </>
          ) : (
            <ModalSuccess
              text="We've received your message! Someone from our team will reach out to you
            shortly to set up a time to chat."
              handleClose={() => setIsLetsChatModalOpen(false)}
            />
          )}
        </>
      )}
    </ModalTemplate>
  );
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email'),
  phoneNumber: Yup.string().test(
    'validPhone',
    'Please enter a valid phone number',
    function (phone) {
      return isValidPhoneNumber(phone);
    }
  ),
  category: Yup.string().required('Please make a selection'),
});

const ConsultationForm = formProps => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnMount={false}
      validateOnChange={false}
      enableReinitialize
      initialValues={{
        firstName: formProps.firstName || '',
        lastName: formProps.lastName || '',
        email: formProps.email || '',
        phoneNumber: formProps.phoneNumber || '',
        category: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        formProps.handleSubmit(values);
      }}
    >
      {props => {
        const handlePhoneChange = phoneNumber => {
          props.setFieldValue('phoneNumber', phoneNumber);
        };

        const handleInterestChange = event => {
          props.setFieldValue('category', event.target.value);
        };

        return (
          <form
            id="main-consultation-form"
            noValidate
            autoComplete="off"
            onSubmit={props.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextInput
                  onChange={props.handleChange}
                  value={props.values.firstName}
                  name="firstName"
                  placeholder="First Name"
                  error={Boolean(props.errors.firstName)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput
                  onChange={props.handleChange}
                  value={props.values.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  error={Boolean(props.errors.lastName)}
                />
              </Grid>
            </Grid>

            <Spacer m="m" />
            <TextInput
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              placeholder="Email"
              error={Boolean(props.errors.email)}
            />
            <Spacer m="m" />
            <PhoneInput
              onChange={handlePhoneChange}
              value={props.values.phoneNumber}
              name="phoneNumber"
              placeholder="Phone number"
              error={Boolean(props.errors.phoneNumber)}
            />
            <Spacer m="m" />
            <Select
              error={Boolean(props.errors.category)}
              value={props.values.category}
              onChange={handleInterestChange}
              label="I'm interested in:"
              menuItems={[
                {
                  value: 'Buyer',
                  label: 'Buying a home',
                },
                {
                  value: 'Seller',
                  label: 'Selling a home',
                },
                {
                  value: 'Buyer, Seller',
                  label: 'Both',
                },
              ]}
            />
            <Spacer m="m" />
            <FormHelperText error>{formProps.requestError}</FormHelperText>
            <DefaultButton type="submit" variant="primary" label={'Submit'} />
          </form>
        );
      }}
    </Formik>
  );
};

export default ChatModal;
