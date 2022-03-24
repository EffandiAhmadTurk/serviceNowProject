import Hero from 'components/Landing/Hero';
import Reviews from 'components/Reviews/Reviews';
import Stats from 'components/Reviews/Stats';
import MidCopy from 'components/Reviews/MidCopy';
import Contact from 'components/Landing/Contact';
import PageLayout from 'layouts/PageLayout';
import { getReviews } from 'controllers/review';
import ReviewBox from 'components/common/Reviews';
import Spacer from 'components/common/Spacer';
import {
  HalfCircleWithCircle,
  TriangleWithRectangle,
} from 'components/common/Patterns';

const ReviewsPage = ({ reviews }) => {
  return (
    <PageLayout
      canonical="https://www.felixhomes.com/reviews"
      title="felix Reviews & Recently Sold Homes | felix"
      description="felix's top rated real estate agents are some of the best reviewed in Tennessee. Our highly reviewed agents are helping people buy and sell homes smoothly all across the Nashville area. But don't take our word for it, read some of the Nashville real estate agent reviews for yourself!"
      navVariant="content"
      isNavTransparent
      withContainer
    >
      <Hero
        heading={`Helping folks save one house at a time.`}
        patternOne={
          <HalfCircleWithCircle
            primaryColor="yellow"
            secondaryColor="blue"
            rotateDirection="right"
          />
        }
        patternTwo={
          <TriangleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="left"
          />
        }
        reviews={<ReviewBox />}
      />
      <Spacer p="xl" hideOnMobile />
      <Stats />
      <MidCopy />
      <Reviews reviews={reviews} />
      <Spacer p="l" />
      <Contact />
      <Spacer p="xl" />
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const reviews = await getReviews();

  return {
    props: {
      reviews: reviews || [],
    },
  };
}

export default ReviewsPage;
