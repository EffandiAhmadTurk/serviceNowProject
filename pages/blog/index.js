import { getBlogPosts, getFeaturedBlogPosts } from 'controllers/blog';
import { getResourcePages } from 'controllers/resource';
import PageLayout from 'layouts/PageLayout';
import Hero from 'components/Landing/Hero';
import Categories from 'components/Blog/Categories';
import Posts from 'components/Blog/Posts';
import CTA from 'components/Blog/CTA';
import FeaturedPosts from 'components/Blog/FeaturedPosts';
import Content from 'layouts/Content';
import SignUp from 'components/common/SignUp';
import Spacer from 'components/common/Spacer';
import {
  PacmanWithCircle,
  HalfCircleWithCircle,
} from 'components/common/Patterns';

const Blog = ({ posts, count, featuredPosts, resourcePages }) => {
  return (
    <PageLayout
      canonical={'https://www.felixhomes.com/blog'}
      title={'Nashville Real Estate Blog | felix'}
      description={
        'The felix Blog keeps you current on the Nashville Real Estate Market.'
      }
      withContainer
      navVariant="content"
      isNavTransparent
    >
      <Hero
        heading="The felix Blog"
        subheading="Your guide to the Nashville Real Estate Market"
        patternOne={
          <PacmanWithCircle
            primaryColor="red"
            secondaryColor="yellow"
            rotateDirection="right"
          />
        }
        patternTwo={
          <HalfCircleWithCircle
            primaryColor="yellow"
            secondaryColor="blue"
            rotateDirection="left"
          />
        }
      />
      <Content withContainer>
        <Categories title="Categories" />
        <Spacer p="l" />
        <FeaturedPosts featuredPosts={featuredPosts} />
        <Spacer p="l" />
        <CTA />
        <Spacer p="m" />
        <Posts path="/blog" title="Recent Posts" posts={posts} count={count} />
        <Spacer p="l" />
        <Posts path="/resources" title="Resources" posts={resourcePages} />
        <Spacer p="xl" />
        <SignUp audience="Buyer" />
        <Spacer p="xl" />
      </Content>
    </PageLayout>
  );
};

export async function getServerSideProps({ query }) {
  const pageNum = query?.page || 1;

  const { posts, count } = await getBlogPosts(pageNum);

  const resourcePages = await getResourcePages();

  const featuredPosts = await getFeaturedBlogPosts();

  return {
    props: {
      posts,
      count,
      featuredPosts,
      resourcePages,
    },
  };
}

export default Blog;
