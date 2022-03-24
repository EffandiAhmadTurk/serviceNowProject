import Head from 'next/head';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import { COMMON_OG_IMAGE } from '../utils/constants';
import styles from './PageLayout.module.scss';
import clsx from 'clsx';

const PageLayout = ({
  children,
  withContainer,
  canonical,
  title,
  description,
  image,
  navVariant,
  isNavTransparent,
}) => {
  return (
    <>
      <Head>
        {canonical && <link rel="canonical" href={canonical} />}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image || COMMON_OG_IMAGE} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        {canonical && <meta property="twitter:url" content={canonical} />}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image || COMMON_OG_IMAGE} />
      </Head>
      <Navigation variant={navVariant} isTransparent={isNavTransparent} />
      <main
        className={clsx(
          styles['container'],
          withContainer && styles['with-container'],
          !isNavTransparent && styles['nav-offset']
        )}
      >
        {children}
      </main>
      <Footer isNavTransparent={isNavTransparent} />
    </>
  );
};

export default PageLayout;
