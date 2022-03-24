import { useEffect, useState } from 'react';
import styles from './Posts.module.scss';
import { useRouter } from 'next/router';
import PostItem from 'components/common/PostItem';
import { BLOG_PAGE_SIZE } from 'utils/constants';
import getOffset from 'utils/getOffset';
import Loader from 'components/common/Loader';
import Pagination from 'components/common/Pagination';
import SectionTitle from 'components/common/SectionTitle';

const LoaderBox = () => {
  return (
    <div style={{ minHeight: '950px', position: 'relative' }}>
      <Loader />
    </div>
  );
};

const Posts = ({ posts, count, title, path }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const handlePaginationClick = (event, pageNum) => {
    setIsLoading(true);
    // Set Scroll Top
    const bodySection = document.getElementById('blog-section');
    const { top } = getOffset(bodySection);
    // Adjust for navbar
    const clearedTop = top - 80;
    event.preventDefault();
    window.scrollTo(0, clearedTop);

    push({
      pathname: path,
      query: { page: pageNum },
    });
  };
  const pages = Math.ceil(count / BLOG_PAGE_SIZE);

  useEffect(() => {
    setIsLoading(false);
  }, [query.page]);

  return (
    <section className={styles['container']}>
      {title && <SectionTitle>{title}</SectionTitle>}

      {isLoading && <LoaderBox />}
      <div className={styles['posts-wrapper']}>
        {!isLoading && (
          <>
            {posts ? (
              <ul className={styles['post-list']}>
                {posts.map(post => (
                  <PostItem post={post} key={post._id} path={path} />
                ))}
              </ul>
            ) : (
              <p style={{ textAlign: 'center' }}>
                No posts available at this time 😕
              </p>
            )}
            {count && (
              <div className={styles['pagination-wrapper']}>
                <Pagination
                  page={query.page ? parseInt(query.page) : 1}
                  count={pages}
                  onChange={handlePaginationClick}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Posts;
