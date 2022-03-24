import Link from 'next/link';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { Phone } from '@styled-icons/boxicons-solid';

const Footer = ({ isNavTransparent }) => {
  const year = new Date().getFullYear();
  return (
    <div
      className={clsx(
        styles['wrapper'],
        !isNavTransparent && styles['nav-offset']
      )}
    >
      <div className={styles['top']}>
        <div className={styles['left']}>
          <Socials />
        </div>
        <div className={styles['right']}>
          <div className={styles['column-wrapper']}>
            <h4>SELL</h4>
            <Link href={'/sell'}>
              <a>Learn about selling</a>
            </Link>
            <a target="_blank" href="https://valuations.felixhomes.com/">
              Get home value
            </a>
          </div>
          <div className={styles['column-wrapper']}>
            <h4>BUY</h4>
            <Link href={'/buy'}>
              <a>Learn about buying</a>
            </Link>
            <Link href={'/feed'}>
              <a>Search Homes</a>
            </Link>
          </div>
          <div className={styles['column-wrapper']}>
            <h4>CONTACT</h4>
            <a href={'tel:615-354-5731'}>615-354-5731</a>
            <a href={'mailto:contact@felixhomes.com'}>contact@felixhomes.com</a>
            <span>
              2550 Meridian Boulevard,
              <br />
              Franklin, TN 37067
            </span>
          </div>
          <div className={clsx(styles['column-wrapper'], styles['more'])}>
            <h4>MORE</h4>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
            <Link href={'/faqs'}>
              <a>FAQs</a>
            </Link>
            <Link href={'/blog'}>
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <div className={styles['border-top']} />
        <div className={styles['left']}>
          <p>© felix {year}</p>

          <Link
            href={'https://www.hud.gov/program_offices/fair_housing_equal_opp'}
          >
            <a target="_blank" rel="nofollow">
              <img src="/images/fair-housing-logo-white.svg" />
            </a>
          </Link>
        </div>

        <div className={styles['right']}>
          <div className={styles['policy-terms']}>
            <Link href={'/privacy-policy'}>
              <a>Privacy Policy</a>
            </Link>
            <Link href={'/tos'}>
              <a>Terms</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Socials = () => (
  <div className={styles['social-wrapper']}>
    <div className={styles['logo']}>
      <img src="/icons/mark.svg" alt="logo" />
    </div>
    <div className={styles['socials-content']}>
      <div className={styles['socials']}>
        <a
          rel="nofollow"
          href={'https://www.instagram.com/felixhomesrealty/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/icons/inst-icon.svg'} alt={'icon'} />
        </a>
        <a
          rel="nofollow"
          href={'https://www.facebook.com/FelixHomesRealty/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/icons/fb-icon.svg'} alt={'icon'} />
        </a>
        <a
          rel="nofollow"
          href={'https://www.linkedin.com/company/felixhomes/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/icons/in-icon.svg'} alt={'icon'} />
        </a>
        <a
          rel="nofollow"
          href={'https://www.youtube.com/channel/UC1KvMk-Vp9J9_2jY0fApJvg'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/icons/youtube-icon.svg'} alt={'icon'} />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
