import Link from 'next/link';
import DefaultButton from 'components/common/DefaultButton';
import styles from './BannerAd.module.scss';

const BannerAd = ({ heading, copy, href, buttonLabel }) => (
  <div className={styles['container']}>
    <div className={styles['copy']}>
      <h3>{heading}</h3>
      <p>{copy}</p>
    </div>
    <div className={styles['action-wrapper']}>
      <DefaultButton
        link={href}
        label={buttonLabel}
        variant="secondary-white"
      />
    </div>
  </div>
);

export default BannerAd;
