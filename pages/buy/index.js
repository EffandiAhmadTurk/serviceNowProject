import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';
import Hero from 'components/Landing/Hero';
import ContentCard from 'components/Landing/ContentCard';
import CalculateSavings from 'components/Landing/CalculateSavings';
import Testimonial from 'components/Landing/Testimonial';
import Contact from 'components/Landing/Contact';
import PageLayout from 'layouts/PageLayout';
import Locations from 'components/Landing/Locations';
import FAQ from 'components/Landing/FAQ';
import Value from '../../components/Landing/Value';
import Spacer from 'components/common/Spacer';
import CTA from 'components/Landing/CTA';
import DefaultButton from 'components/common/DefaultButton';
import { getFaqs } from 'controllers/faq';

import {
  HalfCircleWithCircle,
  PacmanWithCircle,
  RectangleWithHalfCircle,
  DonutWithRectangle,
} from 'components/common/Patterns';

const BuyPage = ({ faqs }) => {
  const { setIsLetsChatModalOpen } = useContext(ModalContext);
  return (
    <PageLayout
      canonical="https://www.felixhomes.com/buy"
      title="Buy Your Nashville Home With a Lower Commission | felix"
      description="felix clients save an average of $8,100 when they buy their homes with us. Learn more about how our low commission real estate agency can help."
      isNavTransparent
    >
      <Hero
        image={{ src: '/images/front-of-house.jpg', alt: 'Exterior of a home' }}
        heading="1.5%* off the list price on any home you buy."
        subheading="As your buyer’s agent, we’ll reduce the commission we charge the seller so that you can save on the sales price."
        disclaimer="Based on a 3% buyer’s agent commission."
        primaryAction={
          <DefaultButton
            link="/feed"
            label="Search Homes"
            variant="secondary-white"
          />
        }
        patternOne={
          <HalfCircleWithCircle
            primaryColor="blue"
            secondaryColor="yellow"
            rotateDirection="left"
          />
        }
        patternTwo={
          <PacmanWithCircle
            primaryColor="red"
            secondaryColor="yellow"
            rotateDirection="right"
          />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/woman-on-feed.jpg',
          alt: 'Woman browsing homes for sale on her phone',
        }}
        eyebrow="STEP 1"
        heading={`Create your custom feed & view the latest listings.`}
        innerContent={
          <p>
            Choose your favorite neighborhoods, select your interior and price
            range. Only see listings that are a good match for you.
          </p>
        }
        primaryAction={
          <DefaultButton link="/feed" label="Search Homes" variant="primary" />
        }
        patternRight={
          <HalfCircleWithCircle primaryColor="yellow" secondaryColor="blue" />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/felix-agent.jpg',
          alt: 'A felix agent showing a home',
        }}
        eyebrow="STEP 2"
        heading={`Schedule showings online in seconds.`}
        textAlign="left"
        innerContent={
          <p>
            Calling your agent to schedule a showing is old news. Schedule a
            showing for any home online and we’ll meet you there in 30 minutes
            or less to give you a tour.
          </p>
        }
        primaryAction={
          <DefaultButton link="/feed" label="Create Feed" variant="primary" />
        }
        patternLeft={
          <RectangleWithHalfCircle primaryColor="yellow" secondaryColor="red" />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/successful-closing.jpg',
          alt: 'A couple taking a phote after buying a home',
        }}
        eyebrow="STEP 3"
        heading={`Get your offer accepted, \n close smoothly & save.`}
        innerContent={
          <p>
            From getting pre-approved to closing, felix is there for you. We
            help you write the best offer and ensure the closing process goes
            off without a hitch. All while saving 1.5% off the price of the
            home.
          </p>
        }
        primaryAction={
          <DefaultButton link="/feed" label="Create Feed" variant="primary" />
        }
        patternRight={
          <DonutWithRectangle primaryColor="blue" secondaryColor="red" />
        }
      />

      <Spacer m="xl" />

      <CTA
        eyebrow="CREATE YOUR LISTING FEED"
        title="Don’t miss out on your dream home."
        action={
          <DefaultButton
            link="/feed"
            label="Create Feed"
            variant="primary-black"
          />
        }
      />

      <Spacer p="l" />

      <CalculateSavings
        type={'buy'}
        action={
          <DefaultButton
            label="Let's Chat"
            onClick={() => setIsLetsChatModalOpen(true)}
            variant="primary"
          />
        }
      />

      <Spacer p="m" />

      <Value
        values={[
          '1.5% buyer savings program',
          'Create a custom listing feed',
          'Schedule tours instantly',
          'Custom home valuation analysis',
          'Hassle-free closing process',
          'Customer satisfaction guaranteed',
        ]}
        title="Buying with felix just makes sense."
        eyebrow="SAVE WHEN YOU BUY"
      />

      <Spacer p="l" />

      <Testimonial
        quote="Tyler was truly amazing to work with. He was the best realtor I've ever worked with. He is very prompt in responding to my emails/text, very punctual, very knowledgeable, and just a pleasure to work with. I would strongly recommend Tyler with felix, to anyone. Thanks Tyler!"
        copy={`Chris and Soyeon A. saved $6,689
        when they bought their home in Hendersonville, TN`}
        subText="Buyers save $8,100 on average."
        image={{
          src: 'images/happy-buyers.jpg',
          alt: 'Image of happy buyers',
        }}
      />

      <Spacer p="l" />

      <Locations
        eyebrow="Explore neighborhoods"
        title="Let’s find your home sweet home."
      />

      <Spacer p="m" />

      <FAQ faqs={faqs} />

      <Spacer p="l" />

      <Contact />

      <Spacer p="xl" />
    </PageLayout>
  );
};

export default BuyPage;

export async function getStaticProps(context) {
  const faqs = await getFaqs('buyers');
  return {
    props: {
      faqs,
    },
  };
}
