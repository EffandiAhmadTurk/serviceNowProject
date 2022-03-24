import Link from 'next/link';
import SectionTitle from '../../common/SectionTitle';
import DefaultButton from '../../common/DefaultButton';
import PostItem from '../../common/PostItem';
import styles from './Blog.module.scss';
import Categories from 'components/Blog/Categories';

const Blog = ({ posts }) => {
  return (
    <section className={styles['container']}>
      <SectionTitle
        title={`Your local guide to \n buying or selling a home.`}
        eyebrow="Latest real estate trends"
        isCenterAligned
      />
      <Categories />

      {posts?.length ? (
        <ul className={styles['post-list']}>
          {posts.map(post => (
            <PostItem post={post} key={post._id} path="/blog" isOnHomePage />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', marginBottom: 30 }}>
          No posts available at this time 😕
        </p>
      )}

      <div className={styles['actions']}>
        <DefaultButton
          link="/blog"
          variant="secondary"
          label="See all Articles"
        />
      </div>
    </section>
  );
};

export default Blog;
