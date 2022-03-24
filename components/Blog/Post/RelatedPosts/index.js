import styles from './RelatedPosts.module.scss';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import RelatedPost from '../../../common/RelatedPost';

const RelatedPosts = ({ relatedPosts, path }) => {
  return (
    <section className={styles['container']}>
      <h3>Related Articles</h3>
      <LazyLoadComponent>
        <div className={styles['wrapper']}>
          {relatedPosts?.length > 0 ? (
            relatedPosts.map((post, index) => {
              if (index <= 5) {
                return (
                  <div key={post.id} className={styles['post-item-wrapper']}>
                    <RelatedPost path={path} post={post} />
                  </div>
                );
              }
            })
          ) : (
            <span>
              There are no additional articles available at the moment.
            </span>
          )}
        </div>
      </LazyLoadComponent>
    </section>
  );
};

export default RelatedPosts;
