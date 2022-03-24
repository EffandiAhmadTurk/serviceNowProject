import PostItem from 'components/common/PostItem';
import SectionTitle from 'components/common/SectionTitle';
import styles from './FeaturedPosts.module.scss';
import { RightArrowCircle } from '@styled-icons/boxicons-solid';
import Link from 'next/link';

const MainPost = ({ post }) => {
  const { image, slug } = post;
  const imageSrc =
    image.formats?.small.url ||
    image.formats?.thumbnail.url ||
    image.url ||
    null;
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={styles['main-post-wrapper']}>
          <img src={imageSrc} />
          <div className={styles['footer']}>
            <h3>{post.title}</h3>
            <RightArrowCircle className={styles['icon']} />
          </div>
        </div>
      </a>
    </Link>
  );
};

const FeaturedPosts = props => {
  const { featuredPosts } = props;

  const mainPost = featuredPosts[featuredPosts.length - 1];
  const topThree = featuredPosts?.slice(1, 4);

  return (
    <section className={styles['container']}>
      <SectionTitle>Featured Articles</SectionTitle>
      <div className={styles['featured-wrapper']}>
        <MainPost post={mainPost} />
        <div className={styles['posts-wrapper']}>
          {topThree?.map((post, index) => (
            <PostItem path="/blog" key={post.id} post={post} isFeaturedPost />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
