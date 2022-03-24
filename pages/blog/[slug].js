import { useContext, useEffect } from 'react';
import {
  getBlogPost,
  getBlogPosts,
  getRelatedBlogPosts,
  getBlogCategory,
} from 'controllers/blog';
import PageLayout from 'layouts/PageLayout';
import Page404 from '../404';
import { ModalContext } from 'contexts/ModalContext';
import Hero from 'components/Landing/Hero';
import Body from 'components/Blog/Post/Body';
import RelatedPosts from 'components/Blog/Post/RelatedPosts';
import Content from 'layouts/Content';
import formatDate from 'utils/formatDate';
import FeaturedImage from 'components/Blog/Post/FeaturedImage';
import SignUp from 'components/common/SignUp';
import Categories from 'components/Blog/Categories';
import Posts from 'components/Blog/Posts';
import Spacer from 'components/common/Spacer';
import {
  TriangleWithRectangle,
  DonutWithRectangle,
} from 'components/common/Patterns';

const PostContent = ({ post, relatedPosts }) => {
  const { body, audience, title, author, published_at, image } = post;
  const { setAdPopupState } = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      setAdPopupState({ isOpen: true, audience });
    }, 15000);
  }, []);

  const imageSrc =
    image?.formats?.medium.url || image?.formats?.small.url || image?.url;
  return (
    <PageLayout
      canonical={`https://www.felixhomes.com/blog/${post?.slug}`}
      title={`${post?.title} | felix`}
      description={post?.description}
      image={imageSrc}
      withContainer
      navVariant="content"
      isNavTransparent
    >
      <Hero
        heading={title}
        patternOne={
          <TriangleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="left"
          />
        }
        patternTwo={
          <DonutWithRectangle
            primaryColor="blue"
            secondaryColor="red"
            rotateDirection="right"
          />
        }
      />
      <Content
        leftCta="related-articles"
        rightCta="blog"
        ctaValues={{ relatedPosts, path: '/blog' }}
      >
        <FeaturedImage
          src={image?.formats?.medium?.url || image?.formats?.small?.url}
          alt={image?.alternativeText}
        />
        <Body audience={audience} body={body} relatedPosts={relatedPosts} />
      </Content>
      <Spacer m="l" />
      <SignUp />
      <Spacer m="l" />
      <RelatedPosts path="/blog" relatedPosts={relatedPosts} />
      <Spacer m="xl" />
    </PageLayout>
  );
};

const CategoryContent = ({ category }) => {
  const { posts } = category;
  return (
    <PageLayout
      canonical={`https://www.felixhomes.com/blog/${category?.slug}`}
      title={`${category?.title} | felix`}
      description={category?.description}
      withContainer
      navVariant="content"
      isNavTransparent
    >
      <Hero
        heading={category.title}
        subheading={category?.description}
        patternOne={
          <TriangleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="left"
          />
        }
        patternTwo={
          <DonutWithRectangle
            primaryColor="blue"
            secondaryColor="red"
            rotateDirection="right"
          />
        }
      />
      <Content withContainer>
        <Categories title="Categories" />
        <Posts path="/blog" posts={posts} />
      </Content>
    </PageLayout>
  );
};

const PostOrCategory = ({
  post,
  relatedPosts = [],
  notFound,
  type,
  category,
}) => {
  if (notFound) return <Page404 />;

  switch (type) {
    case 'post':
      return <PostContent post={post} relatedPosts={relatedPosts} />;
    case 'category':
      return <CategoryContent category={category} />;
    default:
      return <Page404 />;
  }
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = await getBlogPost(slug);
  let relatedPosts = null;

  if (post) {
    const { _id, postCategory } = post;
    const { _id: categoryId } = postCategory || {};
    relatedPosts = await getRelatedBlogPosts({
      currentPostId: _id,
      categoryId,
    });

    return {
      props: { post, relatedPosts, type: 'post' },
    };
  }

  const category = await getBlogCategory(slug);

  if (category) {
    return {
      props: { category, type: 'category' },
    };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const { posts } = await getBlogPosts();

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default PostOrCategory;
