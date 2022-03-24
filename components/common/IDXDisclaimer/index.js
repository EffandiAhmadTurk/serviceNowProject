import styles from './IDXDisclaimer.module.scss';
import clsx from 'clsx';

const IDXDisclaimer = ({ isOnListing }) => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <div
      className={clsx(styles['container'], isOnListing && styles['listing'])}
    >
      <img src="/images/idx-logo.png" />
      <p>
        The data relating to real estate for sale on this website comes in part
        from the IDX or Internet Data Exchange Program of the REALTRACS MLS.
        Real estate listings held by brokerage firms other than felix are marked
        with the REALTRACS Internet Data Exchange Program logo. REALTRACS and
        felix deem all information is believed to be accurate but not guaranteed
        and should be independently verified. REALTRACS and this broker assume
        no responsibility for typographical errors, misprints or misinformation.
        © {currentYear} of the REALTRACS MLS. All rights Reserved.
      </p>
    </div>
  );
};

export default IDXDisclaimer;
