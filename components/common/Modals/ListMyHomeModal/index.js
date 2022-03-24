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
import ModalTitle from '../common/ModalTitle';
import ModalCopy from '../common/ModalCopy';
import Spacer from 'components/common/Spacer';
import ModalSuccess from '../common/ModalSuccess';

const ListMyHomeModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { user } = useContext(AuthContext);

  const { setIsListMyHomeModalOpen, isListMyHomeModalOpen } =
    useContext(ModalContext);

  const handleSubmit = async userInfo => {
    try {
      setIsLoading(true);

      const contactId = await submitLeadInfo({
        ...userInfo,
        id: user?.id,
        action: 'Booked Consultation',
        category: 'Seller',
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
      isOpen={isListMyHomeModalOpen}
      handleClose={() => setIsListMyHomeModalOpen(false)}
      color="green"
      image="/images/green-house-bg.png"
      isLoading={isLoading}
    >
      {!isLoading && (
        <>
          {!isFinished ? (
            <>
              <ModalTitle>List my Home</ModalTitle>

              <ModalCopy>
                Once we’ve received your info below we’ll give you a call to set
                up your in-person consultation.
              </ModalCopy>

              <Spacer m="s" />

              <ConsultationForm
                setIsFinished={setIsFinished}
                setRequestError={setRequestError}
                requestError={requestError}
                handleSubmit={handleSubmit}
                email={user?.email}
                firstName={user?.firstName}
                lastName={user?.lastName}
                phoneNumber={user?.phoneNumber}
              />
            </>
          ) : (
            <ModalSuccess
              text="We've received your message! Someone from our team will reach out to you
            shortly to set up a time to chat."
              handleClose={() => setIsListMyHomeModalOpen(false)}
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
  // +13101234565555
  phoneNumber: Yup.string().test(
    'validPhone',
    'Please enter a valid phone number',
    function (phone) {
      return isValidPhoneNumber(phone);
    }
  ),
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
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        formProps.handleSubmit(values);
      }}
    >
      {props => {
        const handlePhoneNumberChange = phoneNumber => {
          props.setFieldValue('phoneNumber', phoneNumber);
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
                  name="firstName"
                  placeholder="First Name"
                  value={props.values.firstName}
                  error={Boolean(props.errors.firstName)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextInput
                  onChange={props.handleChange}
                  name="lastName"
                  value={props.values.lastName}
                  placeholder="Last Name"
                  error={Boolean(props.errors.lastName)}
                />
              </Grid>
            </Grid>
            <Spacer m="m" />

            <TextInput
              value={formProps.email}
              onChange={props.handleChange}
              name="email"
              placeholder="Email"
              error={Boolean(props.errors.email)}
            />

            <Spacer m="m" />

            <PhoneInput
              onChange={handlePhoneNumberChange}
              value={formProps.phoneNumber}
              name="phoneNUmber"
              placeholder="Phone number"
              error={Boolean(props.errors.phoneNumber)}
            />

            <Spacer m="m" />

            {/* TODO: get this work */}
            {/* <AddressSearch value={props.values.address} /> */}

            <FormHelperText error>{formProps.requestError}</FormHelperText>

            <DefaultButton type="submit" variant="primary" label={'Submit'} />
          </form>
        );
      }}
    </Formik>
  );
};

export default ListMyHomeModal;
