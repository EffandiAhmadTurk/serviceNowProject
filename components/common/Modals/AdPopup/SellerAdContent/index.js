import styles from './SellerAdContent.module.scss';
import Link from 'next/link';
import DefaultButton from 'components/common/DefaultButton';

const SellerAdContent = () => {
  return (
    <div className={styles['container']}>
      <Link href="/sell" as={`/sell`}>
        <a target="_blank" rel="noreferrer" className={styles['link']}>
          <h4>Never pay high commissions. </h4>
          <h3>Sell your home with felix for only 1%.</h3>
          <DefaultButton label="Learn More" variant="secondary-white" />
        </a>
      </Link>
    </div>
  );
};

export default SellerAdContent;
