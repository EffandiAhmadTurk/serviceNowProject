import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';
import Hero from 'components/Landing/Hero';
import ContentCard from 'components/Landing/ContentCard';
import CalculateSavings from 'components/Landing/CalculateSavings';
import Testimonial from 'components/Landing/Testimonial';
import Contact from 'components/Landing/Contact';
import FAQ from 'components/Landing/FAQ';
import PageLayout from 'layouts/PageLayout';
import Value from 'components/Landing/Value';
import CTA from 'components/Landing/CTA';
import Spacer from 'components/common/Spacer';
import DefaultButton from 'components/common/DefaultButton';
import CardText from 'components/Landing/ContentCard/CardText';
import {
  HalfCircleWithCircle,
  TriangleWithRectangle,
  QuarterCircleWithCircle,
  DonutWithRectangle,
} from 'components/common/Patterns';
import { getFaqs } from 'controllers/faq';

const SellPage = ({ faqs }) => {
  const { setIsLetsChatModalOpen, setIsListMyHomeModalOpen } =
    useContext(ModalContext);
  return (
    <PageLayout
      canonical="https://www.felixhomes.com/sell"
      title="Sell Your Nashville Home With a Lower Commission | felix"
      description="felix clients save an average of $8,100 when they sell their homes with us. Learn more about how our low commission real estate agency can help."
      isNavTransparent
    >
      <Hero
        image={{ src: '/images/sell-hero.jpg', alt: 'Interior of a home' }}
        heading="5-star service meets 
        low commissions"
        subheading="Say goodbye to the 3% listing fee when you sell your home. Save $8,100 on average when you sell with felix."
        primaryAction={
          <DefaultButton
            label="List my Home"
            onClick={() => setIsListMyHomeModalOpen(true)}
            variant="secondary-white"
          />
        }
        secondaryAction={
          <DefaultButton
            label="Get Home Value"
            target="_blank"
            link="https://valuations.felixhomes.com/"
            variant="secondary-white"
          />
        }
        patternOne={
          <HalfCircleWithCircle
            primaryColor="blue"
            secondaryColor="red"
            rotateDirection="left"
          />
        }
        patternTwo={
          <TriangleWithRectangle
            primaryColor="yellow"
            secondaryColor="red"
            rotateDirection="right"
          />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/in-person-meeting.jpg',
          alt: 'In person consultation',
        }}
        eyebrow="STEP 1"
        heading={`In-person home consultation.`}
        innerContent={
          <CardText>
            Book a convenient time with one of our local experts, or how we like
            to call them, Felixes. They will guide you and ensure you’re not
            leaving money on the table.
          </CardText>
        }
        primaryAction={
          <DefaultButton
            label="Let's Chat"
            onClick={() => setIsLetsChatModalOpen(true)}
            variant="primary"
          />
        }
        patternRight={
          <HalfCircleWithCircle primaryColor="yellow" secondaryColor="blue" />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/agent-marketing.jpg',
          alt: 'A real estate agent showing a home',
        }}
        eyebrow="STEP 2"
        heading={`We market your home.`}
        textAlign="left"
        innerContent={
          <CardText>
            We upload your listing to the MLS and ensure your home is shown
            across the web on sites like Zillow, Realtor.com, Facebook,
            Instagram, and over 70+ other digital platforms.
          </CardText>
        }
        primaryAction={
          <DefaultButton
            label="Let's Chat"
            onClick={() => setIsLetsChatModalOpen(true)}
            variant="primary"
          />
        }
        patternLeft={
          <QuarterCircleWithCircle primaryColor="red" secondaryColor="yellow" />
        }
      />

      <Spacer m="xxl" />

      <ContentCard
        image={{
          src: '/images/happy-text.jpg',
          alt: 'A young woman sending a text message',
        }}
        eyebrow="STEP 3"
        heading={`Receive offers, close on time & save $8,100.`}
        innerContent={
          <CardText>
            From pre-listing to post-closing, felix is there for you. We help
            you choose the best offer and ensure the closing process goes off
            without a hitch.
          </CardText>
        }
        primaryAction={
          <DefaultButton
            label="List my Home"
            onClick={() => setIsListMyHomeModalOpen(true)}
            variant="primary"
          />
        }
        patternRight={
          <DonutWithRectangle primaryColor="blue" secondaryColor="red" />
        }
      />

      <Spacer m="xl" />

      <CTA
        eyebrow="HOME VALUE ANALYSIS"
        title="Accurately track your home’s value."
        action={
          <DefaultButton
            target="_blank"
            link="https://valuations.felixhomes.com/"
            label="Get home value"
            variant="primary-black"
          />
        }
      />

      <Spacer p="l" />

      <CalculateSavings
        type={'sell'}
        action={
          <DefaultButton
            onClick={() => {
              setIsListMyHomeModalOpen(true);
            }}
            label={'List my Home'}
            variant="primary"
          />
        }
      />

      <Spacer p="m" />

      <Value
        values={[
          'Local real estate expert',
          'Custom home valuation analysis',
          'Professional photos and drone footage',
          'Listing on MLS, Zillow, Realtor.com + more',
          'Never any hidden fees',
          'Customer satisfaction guaranteed',
        ]}
        title="Selling with felix just makes sense."
        eyebrow="ALL THIS FOR JUST 1%"
      />

      <Spacer p="l" />

      <Testimonial
        copy={`Maddie S. saved $5,950 
        when they sold their home in Franklin, TN`}
        quote="felix turned selling into an enlightening and enjoyable experience. Tyler was always extremely responsive to our millions of questions and was always willing to guide and help us. We found all that we were looking for with felix and will continue to use them down the road!"
        subText="Sellers save $8,100 on average."
        image={{
          src: 'images/past-clients.jpg',
          alt: 'Image of happy sellers',
        }}
      />

      <Spacer p="l" />

      <FAQ faqs={faqs} />

      <Spacer p="l" />

      <Contact />

      <Spacer p="xl" />
    </PageLayout>
  );
};

export default SellPage;

export async function getStaticProps(context) {
  const faqs = await getFaqs('sellers');
  return {
    props: {
      faqs,
    },
  };
}
