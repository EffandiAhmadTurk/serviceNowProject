import Link from 'next/link';
import Head from 'next/head';
import { getLocationPaths } from '../../controllers/location';
import PageLayout from '../../layouts/PageLayout';
import styles from './Sitemap.module.scss';

const Sitemap = ({ cities, zipCodes, neighborhoods, counties }) => {
  return (
    <>
      <Head>
        {/* De-indexes as its csr and holds no seo value */}
        <meta name="robots" content="noindex, follow" />
      </Head>
      <PageLayout
        title="Homes For Sale in Middle Tennessee | felix"
        description="Buy or sell your home with one of Nashville’s top-rated realtors and only pay a 1% commission at closing."
      >
        <section className={styles['sitemap']}>
          <h1>Homes For Sale in Middle Tennessee</h1>
          <div className={styles['section']}>
            <h2>Counties</h2>
            <div className={styles['locations']}>
              {counties.map(({ path, name }) => (
                <Link href={path}>
                  <a className={styles['location']}>{name} Homes For Sale</a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles['section']}>
            <h2>Cities</h2>
            <div className={styles['locations']}>
              {cities.map(({ path, name }) => (
                <Link href={path}>
                  <a className={styles['location']}>
                    {name}, TN Homes For Sale
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles['section']}>
            <h2>Zip Codes</h2>
            <div className={styles['locations']}>
              {zipCodes.map(({ path, name }) => (
                <Link href={path}>
                  <a className={styles['location']}>{name} Homes For Sale</a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles['section']}>
            <h2>Neighborhoods</h2>
            <div className={styles['locations']}>
              {neighborhoods.map(({ path, name }) => (
                <Link href={path}>
                  <a className={styles['location']}>{name} Homes For Sale</a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export async function getServerSideProps() {
  const counties = await getLocationPaths(['County']);
  const cities = await getLocationPaths(['City']);
  const zipCodes = await getLocationPaths(['Zip Code']);
  const neighborhoods = await getLocationPaths(['Neighborhood']);

  return {
    props: {
      cities,
      zipCodes,
      neighborhoods,
      counties,
    },
  };
}

export default Sitemap;
