import styles from './SetUpFeedCta.module.scss';
import DefaultButton from 'components/common/DefaultButton';
import { SearchAlt } from '@styled-icons/boxicons-regular';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

const SetUpFeedCta = ({ isDesktop, locationSlug, locationName }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const authCopy = (
    <p>
      <b>Hot listings sell in a matter of days.</b> Add {locationName} to your
      feed and view the listings that are most relavant to you
    </p>
  );
  const copy = (
    <p>
      <b>Hot listings sell in a matter of days.</b> Set up a personal feed for{' '}
      {locationName} to view the listings that are most relavant to you
    </p>
  );

  const desktopContent = (
    <div className={styles['desktop-container']}>
      <SearchAlt size={60} />
      <h3>NEVER MISS A NEW LISTING</h3>
      {isAuthenticated ? authCopy : copy}
      <DefaultButton
        link={`/feed?locationSlug=${locationSlug}&locationName=${locationName}`}
        label={isAuthenticated ? 'Add to Feed' : 'Set up Feed'}
        variant="primary"
      />
    </div>
  );

  const mobileContent = (
    <div className={styles['mobile-container']}>
      <div className={styles['wrapper']}>
        <h3>Never miss a new listing!</h3>
        <DefaultButton
          link={`/feed?locationSlug=${locationSlug}&locationName=${locationName}`}
          label={isAuthenticated ? 'Add to Feed' : 'Set up Feed'}
          variant="primary"
        />
      </div>
    </div>
  );

  if (isDesktop) {
    return desktopContent;
  } else {
    return mobileContent;
  }
};

export default SetUpFeedCta;
