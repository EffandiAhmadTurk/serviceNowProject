import styles from './BuyerAdContent.module.scss';
import Link from 'next/link';
import DefaultButton from 'components/common/DefaultButton';

const BuyerAdContent = () => {
  return (
    <div className={styles['container']}>
      <Link href="/buy" as={`/buy`}>
        <a target="_blank" rel="noreferrer" className={styles['link']}>
          <h3>The only Buyer Savings program in Tennessee. Period. </h3>
          <p className={styles['text']}>
            Get 1.5% off the sales price <br />
            when you buy with felix
          </p>
          <DefaultButton
            label="Learn More"
            link="/buy"
            variant="secondary-white"
          />
        </a>
      </Link>
    </div>
  );
};

export default BuyerAdContent;
