import { useContext } from 'react';
import Hero from 'components/Landing/Hero';
import ContentCard from 'components/Landing/ContentCard';
import TeamInnerContent from 'components/Landing/ContentCard/TeamInnerContent';
import CardText from 'components/Landing/ContentCard/CardText';
import Locations from 'components/Landing/Locations';
import Reviews from 'components/common/Reviews';
import Spacer from 'components/common/Spacer';
import Press from 'components/Landing/Press';
import Contact from 'components/Landing/Contact';
import Testimonials from 'components/Home/Testimonials';
import Blog from 'components/Home/Blog';
import { ModalContext } from 'contexts/ModalContext';
import DefaultButton from 'components/common/DefaultButton';
import PageLayout from 'layouts/PageLayout';
import {
  HalfCircleWithRectangle,
  TriangleWithCircle,
  PacmanWithCircle,
  QuarterCircleWithCircle,
  HalfCircleWithCircle,
} from 'components/common/Patterns';

import {
  getFeaturedBlogPosts,
  getBlogCategoryMenuItems,
} from 'controllers/blog';

const HomePage = ({ blogCategories, posts }) => {
  const { setIsLetsChatModalOpen, setIsListMyHomeModalOpen } =
    useContext(ModalContext);
  return (
    <PageLayout
      canonical={'https://www.felixhomes.com/'}
      title={'Low Commission Nashville Real Estate Agents | felix'}
      description={
        'Buy or sell your home with one of Nashville’s top-rated realtors and only pay a 1% commission at closing.'
      }
      isNavTransparent
    >
      <Hero
        image={{ src: '/images/felix-house.jpg', alt: 'House with front yard' }}
        heading={`Save a whopping $8,100*`}
        subheading="when you buy or sell your home with felix."
        primaryAction={
          <DefaultButton
            label="List my Home"
            variant="secondary-white"
            onClick={() => setIsListMyHomeModalOpen(true)}
          />
        }
        secondaryAction={
          <DefaultButton
            link="/feed"
            label="Search Homes"
            variant="secondary-white"
          />
        }
        disclaimer="felix clients’ average savings in 2021."
        patternOne={
          <HalfCircleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="right"
          />
        }
        patternTwo={
          <TriangleWithCircle
            primaryColor="red"
            secondaryColor="blue"
            rotateDirection="left"
          />
        }
        reviews={<Reviews hasSeeAllLink />}
      />

      <Spacer m="xl" p="xl" hideOnMobile />

      <Spacer m="xl" hideOnMobile />

      <ContentCard
        image={{
          src: '/images/felix-agent.jpg',
          alt: 'felix agent showing a home',
        }}
        eyebrow="sell with felix"
        heading={`Experienced agents. \n1% commission. \nNo hidden fees.`}
        innerContent={
          <p>
            Times have changed but commissions have remained the same. At felix
            we believe you shouldn’t have to pay an outrageous commission to get
            the highest price for your home.
          </p>
        }
        primaryAction={
          <DefaultButton
            label="List my Home"
            onClick={() => setIsListMyHomeModalOpen(true)}
            variant="primary"
          />
        }
        secondaryAction={
          <DefaultButton label="Learn More" link="/sell" variant="secondary" />
        }
        patternRight={
          <PacmanWithCircle primaryColor="red" secondaryColor="blue" />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/couple-moving.jpg',
          alt: 'Happy Home Buyers Unpacking',
        }}
        eyebrow="BUY WITH FELIX"
        heading={`1.5%* off the list price \non any home you buy.`}
        innerContent={
          <CardText>
            As your buyer’s agent, we reduce our commission so that you can save
            on the <nobr>sales price.</nobr>
          </CardText>
        }
        primaryAction={
          <DefaultButton label="Search Homes" link="/feed" variant="primary" />
        }
        secondaryAction={
          <DefaultButton label="Learn More" link="/buy" variant="secondary" />
        }
        disclaimer="Based on a 3% buyer’s agent commission."
        patternLeft={
          <QuarterCircleWithCircle
            primaryColor="blue"
            secondaryColor="yellow"
          />
        }
        textAlign="left"
      />

      <Spacer m="xl" />

      <Testimonials />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/the-team-with-gingo.png',
          alt: 'The Team',
          contain: true,
        }}
        eyebrow="MEET THE TEAM"
        heading={`The people & pup working hard to save you $$$.`}
        innerContent={<TeamInnerContent />}
        primaryAction={
          <DefaultButton
            label="Let's Chat"
            onClick={() => setIsLetsChatModalOpen(true)}
            variant="primary"
          />
        }
        patternRight={
          <QuarterCircleWithCircle primaryColor="red" secondaryColor="yellow" />
        }
      />

      <Spacer m="xl" />

      <Locations
        title="Let’s find your home sweet home."
        eyebrow="Explore Nashville neighborhoods"
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/family-cooking.jpg',
          alt: 'A Family Gathering',
        }}
        eyebrow="THE FELIX GUARANTEE"
        heading={`We like to make 
        bold promises.`}
        innerContent={
          <CardText>
            So much so, that if you’re not ​100% satisfied​ when buying or
            selling your home, we’ll refund our entire commission{' '}
            <nobr> at closing—guaranteed.</nobr>
          </CardText>
        }
        primaryAction={
          <DefaultButton
            label="List my Home"
            onClick={() => setIsListMyHomeModalOpen(true)}
            variant="primary"
          />
        }
        patternLeft={
          <HalfCircleWithCircle primaryColor="yellow" secondaryColor="red" />
        }
        textAlign="left"
      />
      <Spacer m="xl" />

      <Blog posts={posts} blogCategories={blogCategories} />
      <Spacer p="l" />
      <Press />
      <Spacer p="xl" />
      <Contact />
      <Spacer p="xl" />
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const query = {
    limit: 6,
  };
  const posts = await getFeaturedBlogPosts(query);
  const blogCategories = await getBlogCategoryMenuItems();

  return {
    props: { posts, blogCategories },
  };
}

export default HomePage;
