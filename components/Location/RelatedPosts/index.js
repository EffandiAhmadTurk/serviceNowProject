import { useEffect, useState } from 'react';
import RelatedPost from 'components/common/RelatedPost';
import styles from './RelatedPosts.module.scss';
import axios from 'axios';
import queryString from 'query-string';
import Loader from 'components/common/Loader';

const getRelatedPosts = async postIds => {
  try {
    const { data: relatedPosts } = await axios.get(
      '/api/locations/related-posts',
      {
        params: { postIds },
        paramsSerializer: params => {
          return queryString.stringify(params, { arrayFormat: 'comma' });
        },
      }
    );
    return relatedPosts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const RelatedPosts = ({ locationName, locationRelatedPostIds = [] }) => {
  const [relatedPosts, setRelatedPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (locationRelatedPostIds.length) {
          const relatedPosts = await getRelatedPosts(locationRelatedPostIds);
          setRelatedPosts(relatedPosts);
        } else {
          setRelatedPosts([]);
        }
      } catch (error) {
        setRelatedPosts([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const hasRelatedPosts = locationRelatedPostIds.length !== 0;

  return (
    <div className={styles['container']}>
      <h2>Articles related to {locationName}</h2>
      {isLoading && (
        <div className={styles['loading-container']}>
          <Loader />
        </div>
      )}
      <div className={styles['content']}>
        {hasRelatedPosts &&
          relatedPosts?.map(
            (post, index) =>
              index <= 3 && <RelatedPost key={post.slug} post={post} />
          )}
        {!hasRelatedPosts && !isLoading && (
          <p className={styles['not-found']}>
            There are no additional articles available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};
export default RelatedPosts;
