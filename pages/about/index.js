import Hero from 'components/Landing/Hero';
import ValueProps from 'components/About/ValueProps';
import TheTeam from 'components/About/TheTeam';
import Press from 'components/About/Press';
import PageLayout from 'layouts/PageLayout';
import Spacer from 'components/common/Spacer';
import {
  HalfCircleWithRectangle,
  TriangleWithCircle,
} from 'components/common/Patterns';

const AboutPage = () => {
  return (
    <PageLayout
      canonical={'https://www.felixhomes.com/about'}
      title={
        "Learn more about felix, Nashville's Low Commission real estate agency."
      }
      description={
        'Buy or sell your home with one of Nashville’s top-rated realtors and only pay a 1% commission at closing.'
      }
      navVariant="content"
      isNavTransparent
      withContainer
    >
      <Hero
        heading={`Buying and selling a \n home was broken.`}
        subheading={`We're on a mission to end the 6% commission \n by leveraging the power of technology.`}
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
      />

      <ValueProps />

      <Spacer p="l" />

      <TheTeam />
      <Spacer p="l" />
      <Press />
      <Spacer p="xl" />
    </PageLayout>
  );
};

export default AboutPage;
