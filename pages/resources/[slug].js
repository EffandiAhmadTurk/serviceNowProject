import { useRouter } from 'next/router';
import {
  getResourcePage,
  getResourcePageSuggestions,
  getResourcePages,
} from 'controllers/resource';
import Hero from 'components/Landing/Hero';
import Body from 'components/Blog/Post/Body';
import RelatedPages from 'components/Blog/Post/RelatedPosts';
import FeaturedImage from 'components/Blog/Post/FeaturedImage';
import PageLayout from 'layouts/PageLayout';
import Content from 'layouts/Content';
import PageLoader from 'components/common/Loader';
import Contact from 'components/Landing/Contact';
import Page404 from '../404';
import {
  TriangleWithRectangle,
  DonutWithRectangle,
} from 'components/common/Patterns';

const ResourcePage = ({ page, suggestions }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <PageLoader />;
  }

  if (!page) return <Page404 />;

  return (
    <PageLayout
      canonical={`https://www.felixhomes.com/resources/${page.slug}`}
      title={page?.title}
      description={page?.description}
      image={page.image?.formats.medium.url}
      withContainer
    >
      <Hero
        patternOne={
          <TriangleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="right"
          />
        }
        patternTwo={
          <DonutWithRectangle
            primaryColor="blue"
            secondaryColor="red"
            rotateDirection="left"
          />
        }
        heading={page.title}
        subheading={page.description}
      />

      <Content rightCta="blog" withContainer>
        <FeaturedImage
          src={page.image?.formats?.medium?.url || image?.formats?.small?.url}
          alt={page.image?.alternativeText}
        />
        <Body body={page.body} />
      </Content>
      <Contact />
      <RelatedPages path="/resources" relatedPosts={suggestions} />
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  console.log(`Creating Resource Page: ${slug}`);

  const page = await getResourcePage(slug);

  if (!page) {
    return {
      props: {},
    };
  }

  const { _id } = page;

  const suggestions = await getResourcePageSuggestions(_id);

  return {
    props: { page, suggestions },
  };
}

export async function getStaticPaths() {
  const resourcePages = await getResourcePages();

  const paths = resourcePages.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export default ResourcePage;
