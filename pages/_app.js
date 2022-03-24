import { useEffect, useState } from 'react';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../styles/MUITheme';
import NextNprogress from 'nextjs-progressbar';
import { ModalContextProvider } from '../contexts/ModalContext';
import { AuthContextProvider } from '../contexts/AuthContext';
import { SearchContextProvider } from '../contexts/SearchProvider';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import ScrollPattern from 'components/common/Patterns/ScrollPattern';

const LetsChatModal = dynamic(
  () => import('components/common/Modals/LetsChatModal'),
  {
    ssr: false,
  }
);
const ScheduleTourModal = dynamic(
  () => import('components/common/Modals/ScheduleTourModal'),
  {
    ssr: false,
  }
);
const LoginModal = dynamic(
  () => import('components/common/Modals/LoginModal'),
  {
    ssr: false,
  }
);
const SignupModal = dynamic(
  () => import('components/common/Modals/SignupModal'),
  {
    ssr: false,
  }
);
const ResetPasswordModal = dynamic(
  () => import('components/common/Modals/ResetPasswordModal'),
  {
    ssr: false,
  }
);
const LocationReviewModal = dynamic(
  () => import('components/common/Modals/LocationReviewModal'),
  {
    ssr: false,
  }
);
const ListMyHomeModal = dynamic(
  () => import('components/common/Modals/ListMyHomeModal'),
  {
    ssr: false,
  }
);

const AdPopup = dynamic(() => import('components/common/Modals/AdPopup'), {
  ssr: false,
});

const ReviewModal = dynamic(
  () => import('components/common/Modals/ReviewModal'),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#5577f2"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
        options={{ showSpinner: false }}
      />
      <ScrollPattern />
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ModalContextProvider>
            <AuthContextProvider>
              <SnackbarProvider>
                <SearchContextProvider>
                  <Component {...pageProps} />

                  <ListMyHomeModal />

                  <LetsChatModal />

                  <ScheduleTourModal />

                  <LoginModal />

                  <SignupModal />

                  <ResetPasswordModal />

                  <LocationReviewModal />

                  <ReviewModal />

                  <AdPopup />
                </SearchContextProvider>
              </SnackbarProvider>
            </AuthContextProvider>
          </ModalContextProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
