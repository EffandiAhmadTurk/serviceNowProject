// New
import Hero from 'components/Landing/Hero';
import Navigation from 'components/Location/Navigation';
import About from 'components/Location/About';
import Leisure from 'components/Location/Leisure';
import PopularSearches from 'components/Location/PopularSearches';
import Commute from 'components/Location/Commute';
import ProsAndCons from 'components/Location/ProsAndCons';
import Pictures from 'components/Location/Pictures';
import ThingsToDo from 'components/Location/ThingsToDo';
import Schools from 'components/Location/Schools';
import Crime from 'components/Location/Crime';
import Parks from 'components/Location/Parks';
import Employment from 'components/Location/Employment';
import CostOfLiving from 'components/Location/CostOfLiving';
import RealEstateTrends from 'components/Location/RealEstateTrends';
import Reviews from 'components/Location/Reviews';
import FAQs from 'components/Location/FAQs';
import NearbyLocations from 'components/Location/NearbyLocations';
import RelatedPosts from 'components/Location/RelatedPosts';
import SignUp from 'components/common/SignUp';
import Container from './common/Container';
import Listings from 'components/Location/Listings';
import IDXDisclaimer from 'components/common/IDXDisclaimer';
import BannerAd from 'components/common/BannerAd';
import BreadCrumbs from 'components/common/BreadCrumbs';
import {
  HalfCircleWithRectangle,
  TriangleWithCircle,
} from 'components/common/Patterns';

import Content from 'layouts/Content';
import useDevices from 'utils/useDevices';

const getPOIsByCategoryType = (type, pointOfInterests = []) => {
  const isCategoryType = ({ categoryType }) => {
    return categoryType === type;
  };
  return pointOfInterests.filter(isCategoryType);
};

const Location = ({ listingsData, geo, location }) => {
  const { isMobile, isTablet } = useDevices();

  const hasTopCTA = location.content?.about ? true : false;
  const hasBottomCTA = location.content?.pointOfInterests ? true : false;

  return (
    <>
      <Hero
        heading={`${location.name}, TN`}
        subheading={`${location.name} Real Estate and Homes For Sale`}
        chipLabel={location.type}
        reverseTags
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
      <Navigation locationSlug={location.slug} />

      <Content
        // Were hiding the CTA here if theres not enough content to justify a scrolling CTA
        rightCta={hasTopCTA && 'feed'}
        withContainer
        ctaValues={{ locationSlug: location.slug, locationName: location.name }}
      >
        <BreadCrumbs
          currentCrumb={location.name}
          city={location.city}
          county={location.county}
          type={location.type}
          locationPath={location.path}
          locationName={location.name}
          state={location.state}
        />

        <div id="location-about">
          <About
            locationReviewAverage={location.content?.reviewAverage}
            locationReviewCount={location.content?.reviewCount}
            locationAboutContent={location.content?.about}
            locationName={location.name}
          />

          <Leisure
            locationLeisures={getPOIsByCategoryType(
              'Leisure',
              location.content?.pointOfInterests
            )}
            locationLeisureContent={location.content?.leisure}
          />
        </div>
      </Content>

      <Listings
        listingsData={listingsData}
        geo={geo}
        location={location}
        isLocationPage={true}
      />

      <Content
        // Were hiding the CTA here if theres not enough content to justify a scrolling CTA
        rightCta={hasBottomCTA && 'feed'}
        withContainer
        ctaValues={{ locationSlug: location.slug, locationName: location.name }}
      >
        <BannerAd
          heading={`Never miss a new listing!`}
          copy="Set up a personal feed to view the listings that are most relavant to you"
          href="/feed"
          buttonLabel="Set up feed"
        />

        <PopularSearches
          locationType={location.type}
          locationSlug={location.slug}
          locationPath={location.path}
        />

        <ProsAndCons
          locationProsContent={location.content?.pros}
          locationConsContent={location.content?.cons}
          locationName={location.name}
        />

        <Pictures
          locationImages={location.content?.images}
          locationName={location.name}
        />

        <Commute
          locationName={location.name}
          locationLat={location.lat}
          locationLng={location.lng}
          locationCommuteContent={location.content?.commute}
        />

        <ThingsToDo
          locationLat={location.lat}
          locationLng={location.lng}
          locationName={location.name}
          locationThingsToDo={getPOIsByCategoryType(
            'ThingToDo',
            location.content?.pointOfInterests
          )}
          locationThingsToDoContent={location.content?.thingsToDo}
        />

        <Parks
          locationParks={getPOIsByCategoryType(
            'Park',
            location.content?.pointOfInterests
          )}
          locationName={location.name}
          locationParksContent={location.content?.parks}
        />
      </Content>
      <div id={'location-schools'}>
        <Schools
          locationLat={location.lat}
          locationLng={location.lng}
          locationName={location.name}
          locationSchoolsContent={location.content?.schools}
        />
      </div>
      <Container>
        <div id="location-stats">
          <Crime
            locationCrimeContent={location.content?.crime}
            locationCrime={location.crime}
            locationName={location.name}
          />
          <CostOfLiving
            locationCosts={location.costs}
            locationName={location.name}
            locationCostOfLivingContent={location.content?.costOfLiving}
          />
          <Employment
            locationIncome={location.income}
            locationEmployement={location.employment}
            locationName={location.name}
            locationPopulation={location.currentPopulation}
          />
          <RealEstateTrends
            locationActiveListingsTotal={listingsData?.total}
            locationStats={location.stats}
            locationName={location.name}
            locationTrendsContent={location.content?.trends}
          />
        </div>

        <div id="location-reviews">
          <Reviews
            locationReviewCount={location.content?.reviewCount}
            locationReviewAverage={location.content?.reviewAverage}
            locationReviews={location.content?.locationReviews}
            locationName={location.name}
            locationSlug={location.slug}
            locationPath={location.path}
            locationFeaturedImage={location.content?.featuredImage}
          />
        </div>

        <div id="location-faqs">
          <FAQs
            locationFaqContent={location.content?.frequentlyAskedQuestions}
          />
        </div>

        <NearbyLocations
          locationName={location.name}
          locationType={location.type}
          locationSimilarLocationIds={location.content?.similarLocations}
          nearbyLocations={location.nearbyLocations}
          isTablet={isTablet}
          isMobile={isMobile}
        />

        <RelatedPosts
          locationName={location.name}
          locationRelatedPostIds={location.content?.relatedPosts}
        />

        <SignUp audience="Buyer" />
      </Container>
      <IDXDisclaimer />
    </>
  );
};

export default Location;
