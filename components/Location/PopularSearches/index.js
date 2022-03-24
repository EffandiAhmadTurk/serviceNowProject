import Link from 'next/link';
import styles from './PopularSearches.module.scss';
import { listingFilters, isFilterLocation } from 'utils/listingFilterUtils';
import Section from '../common/Section';
import { Sun } from '@styled-icons/boxicons-solid';

const PopularSearches = ({ locationType, locationSlug, locationPath }) => {
  if (!isFilterLocation(locationSlug) || locationType !== 'City') {
    return null;
  }

  return (
    <Section heading="Popular Searches" icon={<Sun size={32} />}>
      <div className={styles['container']}>
        <div className={styles['chips-wrapper']}>
          {listingFilters?.map(({ name, slug }) => (
            <Link key={slug} href={`${locationPath}/${slug}`}>
              <a className={styles['chip']}>{name}</a>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PopularSearches;
