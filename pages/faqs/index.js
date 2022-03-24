import PageLayout from '../../layouts/PageLayout';
import Hero from 'components/Landing/Hero';
import General from 'components/FAQ/General';
import Sellers from 'components/FAQ/Sellers';
import Buyers from 'components/FAQ/Buyers';
import Spacer from 'components/common/Spacer';
import {
  HalfCircleWithCircle,
  PacmanWithCircle,
} from 'components/common/Patterns';
import { getFaqs } from 'controllers/faq';

const FaqsPage = ({ faqs }) => {
  return (
    <PageLayout
      canonical={'https://www.felixhomes.com/faqs'}
      title={'Frequently Asked Questions | felix'}
      description={'felix Frequently Asked Questions'}
      isNavTransparent
      navVariant="content"
      withContainer
    >
      <Hero
        heading="FAQs"
        subheading="You've got questions? We have answers."
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
      <Spacer p="s" />
      <General faqs={faqs.filter(faq => faq.type === 'general')} />
      <Spacer p="s" />
      <Sellers faqs={faqs.filter(faq => faq.type === 'sellers')} />
      <Spacer p="s" />
      <Buyers faqs={faqs.filter(faq => faq.type === 'buyers')} />
      <Spacer p="xl" />
    </PageLayout>
  );
};

export default FaqsPage;

export async function getStaticProps(context) {
  const faqs = await getFaqs();
  return {
    props: {
      faqs,
    },
  };
}
