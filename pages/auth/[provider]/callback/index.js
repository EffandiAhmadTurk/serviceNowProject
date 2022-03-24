import { useContext, useEffect } from 'react';
import Loader from '../../../../components/common/Loader';
import { logInUserViaProvider } from '../../../../utils/auth';
import { AuthContext } from '../../../../contexts/AuthContext';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import submitLeadInfo from '../../../../utils/submitLeadInfo';

const AuthPage = ({ authPath }) => {
  const { setUserInfo } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleLoginViaProvider = async authPath => {
    try {
      const userInfo = await logInUserViaProvider(authPath);
      setUserInfo(userInfo);
      const { user } = userInfo;
      submitLeadInfo({ user, category: 'Buyer', action: 'Created Account' });
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
      router.push('/');
    }
  };

  useEffect(() => {
    handleLoginViaProvider(authPath);
  }, [authPath]);

  return (
    <div>
      <Loader />
    </div>
  );
};

export async function getServerSideProps({ res, query, resolvedUrl }) {
  const idToken = query?.id_token;
  const accessToken = query?.access_token;

  if (idToken || accessToken) {
    return {
      props: {
        authPath: resolvedUrl,
      },
    };
  } else {
    res.statusCode = 301;
    res.setHeader('Location', '/');
    return { props: {} };
  }
}

export default AuthPage;
