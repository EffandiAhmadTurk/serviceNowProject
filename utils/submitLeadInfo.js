import axios from 'axios';

const submitLeadInfo = async userInfo => {
  console.log(userInfo);
  try {
    const {
      data: { contactId },
    } = await axios.post(`/api/users/submit-info`, userInfo);

    return contactId;
  } catch (error) {
    return error;
  }
};

export default submitLeadInfo;
