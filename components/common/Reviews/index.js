import { Rating } from '@material-ui/lab';
import styles from './Reviews.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const cards = [
  {
    src: '/images/Zillow.svg',
    alt: 'Zillow',
    rate: 5,
    link: 'https://www.zillow.com/profile/tylerfelixhomes/#reviews',
  },
  {
    src: '/images/Google.svg',
    alt: 'Google',
    rate: 4.9,
    link:
      'https://www.google.com/search?q=felix+homes+reviews&oq=felix+homes+reviews&aqs=chrome.0.69i59j69i60l3.5107j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89e8f33dbf2399f3:0xaebd7a48ff79ef0a,1',
  },
  {
    src: '/images/Trustpilot.svg',
    alt: 'Trustpilot',
    rate: 4.7,
    link: 'https://www.trustpilot.com/review/felixhomes.com',
  },
];

const Reviews = ({ style, hasSeeAllLink }) => {
  return (
    <div className={styles['container']} style={style}>
      <div className={styles['contents']}>
        <div className={clsx(styles['cards'], !hasSeeAllLink && styles['mb'])}>
          {cards.map(card => (
            <Link href={card.link} key={card.alt}>
              <a className={styles['item']} target="_blank" rel="nofollow">
                <div className={styles['image-wrapper']}>
                  <img src={card.src} alt={card.alt} />
                </div>
                <div className={styles['rating']}>
                  <Rating name="read-only" value={card.rate} readOnly />
                  <span className={styles['rate-value']}>{card.rate}/5</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        {hasSeeAllLink && (
          <Link href="/reviews" passHref>
            <a className={styles['see-all']}>See 70+ reviews</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Reviews;
