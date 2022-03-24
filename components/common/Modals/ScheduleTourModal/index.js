import { useState, useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';
import moment from 'moment';
import { FormHelperText, Grid } from '@material-ui/core';
import ModalTemplate from '../common/ModalTemplate';
import TextInput from '../../TextInput';
import DefaultButton from '../../DefaultButton';
import PhoneInput from 'components/common/PhoneInput';
import Loader from '../../Loader';
import { ModalContext } from 'contexts/ModalContext';
import { AuthContext } from 'contexts/AuthContext';
import SearchContext from 'contexts/SearchContext';
import submitLeadInfo from 'utils/submitLeadInfo';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import convertListItemToDataLayer from 'utils/convertListItemToDataLayer';
import ModalTitle from '../common/ModalTitle';
import ModalCopy from '../common/ModalCopy';
import Spacer from 'components/common/Spacer';
import Select from 'components/common/Select';
import DatePicker from 'components/common/DatePicker';
import ModalSuccess from '../common/ModalSuccess';

const ScheduleTourModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { searchString } = useContext(SearchContext);

  const { setScheduleTourModal, scheduleTourModal } = useContext(ModalContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = async ({ listing, ...userInfo }) => {
    setIsLoading(true);
    try {
      submitGoalToGoogleTagManager({
        event: 'clearEcommerce',
        ecommerce: null,
      });

      const contactId = await submitLeadInfo({
        ...userInfo,
        id: user?.id,
        action: 'Booked Tour',
        category: 'Buyer',
      });

      submitGoalToGoogleTagManager({
        event: 'clientId',
        clientId: contactId,
      });

      // Clear the previous ecommerce object.
      submitGoalToGoogleTagManager({
        event: 'purchase',
        ecommerce: {
          items: [
            convertListItemToDataLayer({
              el: listing,
              index: 1,
              search: searchString,
            }),
          ],
        },
      });
      setIsLoading(false);
      setIsFinished(true);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setRequestError(
        "Unfortunately we're unable to receive your request at the moment"
      );
    }
  };

  return (
    <ModalTemplate
      isOpen={scheduleTourModal.isOpen}
      handleClose={() => setScheduleTourModal({ isOpen: false })}
      color="yellow"
      image="/images/yellow-house-bg.png"
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {!isFinished ? (
            <>
              <ModalTitle>
                Looking to check out this home? Simply fill out your info below.
              </ModalTitle>

              <ModalCopy>
                Once received, we'll reach out to the seller confirm a time.
              </ModalCopy>

              <Spacer m="m" />

              <TourForm
                setIsFinished={setIsFinished}
                setRequestError={setRequestError}
                requestError={requestError}
                handleSubmit={handleSubmit}
                address={scheduleTourModal.address}
                addressLink={scheduleTourModal.addressLink}
                listing={scheduleTourModal.listing}
                email={user?.email}
                firstName={user?.firstName}
                lastName={user?.lastName}
                phoneNumber={user?.phoneNumber}
              />
            </>
          ) : (
            <ModalSuccess
              text="We've received your tour request! Someone from our team will be in touch
            shortly."
              handleClose={() => setScheduleTourModal({ isOpen: false })}
            />
          )}
        </>
      )}
    </ModalTemplate>
  );
};

const GetStartedSchema = Yup.object().shape({
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
});

const TourForm = formProps => {
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
        date: moment().format('MM/DD/YYYY'),
        time: '',
        address: formProps.address,
        addressLink: formProps.addressLink,
        listing: formProps.listing,
      }}
      validationSchema={GetStartedSchema}
      onSubmit={async values => {
        formProps.handleSubmit(values);
      }}
    >
      {props => {
        const handlePhoneNumberChange = phoneNumber => {
          props.setFieldValue('phoneNumber', phoneNumber);
        };

        const handleDateChange = date => {
          const formattedDate = moment(date).format('MM/DD/YYYY');
          props.setFieldValue('date', formattedDate);
        };

        const handleTimeChange = event => {
          props.setFieldValue('time', event.target.value);
        };

        return (
          <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextInput
                  onChange={props.handleChange}
                  name="firstName"
                  placeholder="First Name"
                  error={props.errors.firstName}
                  value={props.values.firstName}
                />
              </Grid>

              <Grid item xs={6}>
                <TextInput
                  onChange={props.handleChange}
                  name="lastName"
                  placeholder="Last Name"
                  error={props.errors.lastName}
                  value={props.values.lastName}
                />
              </Grid>
            </Grid>

            <Spacer m="m" />

            <TextInput
              onChange={props.handleChange}
              name="email"
              placeholder="Email"
              value={props.values.email}
              error={props.errors.email}
            />

            <Spacer m="m" />

            <PhoneInput
              value={formProps.phoneNumber}
              onChange={handlePhoneNumberChange}
              name="phoneNumber"
              placeholder="Phone number"
              error={props.errors.phoneNumber}
            />

            <Spacer m="m" />

            <DatePicker value={props.values.date} onChange={handleDateChange} />

            <Spacer m="m" />

            <Select
              value={props.values.time}
              onChange={handleTimeChange}
              label="What time works best for you"
              menuItems={[
                { label: 'Morning', value: 'morning' },
                { label: 'Afternooon', value: 'afternoon' },
              ]}
            />

            <Spacer m="m" />

            <FormHelperText error>{formProps.requestError}</FormHelperText>
            <DefaultButton type="submit" label="Submit" variant="primary" />
          </form>
        );
      }}
    </Formik>
  );
};

export default ScheduleTourModal;
