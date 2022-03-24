import axios from 'axios';

const getErrorMessage = error => {
  const {
    data: { data },
  } = error.response;
  let serverMessage = data[0]?.messages[0]?.message || data[0]?.messages[0]?.id;
  const errorMessage = serverMessage || null;
  return errorMessage;
};

export const getUserViaLocal = async token => {
  try {
    const { data: userInfo } = await axios.get(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return userInfo;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const logInUserViaProvider = async authPath => {
  try {
    const { data: userInfo } = await axios.get(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}${authPath}`
    );
    return userInfo;
  } catch (error) {
    const errorMessage = getErrorMessage(error) || 'Unable to complete login.';
    throw new Error(errorMessage);
  }
};

export const logInUserViaLocal = async authInfo => {
  try {
    const { data: userInfo } = await axios.post(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/auth/local`,
      authInfo
    );

    return userInfo;
  } catch (error) {
    const errorMessage = getErrorMessage(error) || 'Unable to complete login.';
    throw new Error(errorMessage);
  }
};

// @desc Signs up user
// @params username, email, password
export const signUpUserViaLocal = async authInfo => {
  try {
    const { data: userInfo } = await axios.post(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/auth/local/register`,
      authInfo
    );
    return userInfo;
  } catch (error) {
    const errorMessage = getErrorMessage(error) || 'Unable to complete signup.';
    throw new Error(errorMessage);
  }
};

// @desc Resets user password, only if user has used local method to sign up
// @params code, password, passwordConfirmation
export const resetUserPassword = async authInfo => {
  try {
    const { data: userInfo } = await axios.post(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/auth/reset-password`,
      authInfo
    );
    return userInfo;
  } catch (error) {
    throw new Error();
  }
};

// @desc requests user password link, only if user has used local method to sign up
// @params email
export const forgotUserPassword = async authInfo => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/auth/forgot-password`,
      authInfo
    );
  } catch (error) {
    const errorMessage = getErrorMessage(error) || 'Email not found.';
    throw new Error(errorMessage);
  }
};
