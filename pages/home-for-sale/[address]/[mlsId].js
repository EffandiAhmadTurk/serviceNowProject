import { useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import { getListing, getNearbyListings } from 'controllers/listing';
import ListingDetails from 'components/HomeForSale/ListingDetails';
import Images from 'components/HomeForSale/Images';
import Address from 'components/HomeForSale/Address';
import Details from 'components/HomeForSale/Details';
import Schools from 'components/HomeForSale/Schools';
import Blurb from 'components/HomeForSale/Blurb';
import IDXDisclaimer from 'components/common/IDXDisclaimer';
import BannerAd from 'components/common/BannerAd';
import currencyFormater from 'utils/currencyFormater';
import convertListItemToDataLayer from 'utils/convertListItemToDataLayer';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import SearchContext from 'contexts/SearchContext';
import { ModalContext } from 'contexts/ModalContext';
import Content from 'layouts/Content';
import Description from 'components/HomeForSale/Description';
import useDevices from 'utils/useDevices';
import Spacer from 'components/common/Spacer';

const PointsOfInterest = dynamic(
  () => import('../../../components/HomeForSale/PointsOfInterest'),
  { ssr: false }
);
const SimilarListings = dynamic(
  () => import('../../../components/HomeForSale/SimilarListings'),
  { ssr: false }
);
const PopularSearches = dynamic(() =>
  import('../../../components/HomeForSale/PopularSearches')
);
const PageLayout = dynamic(() => import('../../../layouts/PageLayout'));

let setDataLayer;
const handleSetDataLayer = (listing, searchString) => {
  setDataLayer = setTimeout(() => {
    const convertedListing = convertListItemToDataLayer({
      el: listing,
      index: 1,
      search: searchString,
    });
    // Clear the previous ecommerce object.
    submitGoalToGoogleTagManager({
      event: 'clearEcommerce',
      ecommerce: null,
    });
    submitGoalToGoogleTagManager({
      event: 'viewItem',
      ecommerce: {
        items: [convertedListing],
      },
    });
  }, 3000);
};

const ListingPage = props => {
  const { listing, nearbyListings } = props;
  const { searchString } = useContext(SearchContext);
  const { setAdPopupState } = useContext(ModalContext);
  const { isTablet, isDesktop, isMobile } = useDevices();
  const {
    address,
    description,
    schools,
    listPrice,
    beds,
    bathsTotal,
    livingAreaSF,
    status,
    lotSizeAC,
    mlsId,
    lat,
    lng,
    pointsOfInterest,
    images,
    yearBuilt,
    associationFee1,
    association1Frequency,
    associationFee2,
    association2Frequency,
    heating,
    cooling,
    garageSpaces,
    hasPool,
    listingAgent,
    daysOnMarket,
    currentCity,
    geometry,
  } = listing;

  const savings = currencyFormater.format(Math.round(listPrice * 0.015));

  // Apply default meta description
  let listingDescription = `Details about the home for sale at ${address?.full}`;
  // If description is present, limit to 200 char
  if (description) {
    const addressStringLength = address?.full.length;
    // Determine desc length by subtracting addres and spaces
    const descriptionCutOffLength = 200 - addressStringLength - 2;
    listingDescription = `${address.full}. ${description.substring(
      0,
      descriptionCutOffLength
    )}`;
  }

  useEffect(() => {
    if (!searchString) {
      handleSetDataLayer(listing);
    } else {
      clearTimeout(setDataLayer);
      handleSetDataLayer(listing, searchString);
    }

    // Handle popup
    setTimeout(() => {
      setAdPopupState({ isOpen: true, audience: 'Buyer' });
    }, 5000);
  }, [searchString]);

  return (
    <PageLayout
      canonical={`https://www.felixhomes.com/home-for-sale/${address?.slug}/${mlsId}`}
      title={`Save $${savings} - ${address?.full} | felix`}
      description={listingDescription}
      image={images?.[0]}
      withContainer
      isNavTransparent={false}
    >
      {isTablet && (
        <Address
          listPrice={listPrice}
          address={address}
          beds={beds}
          bathsTotal={bathsTotal}
          livingAreaSF={livingAreaSF}
          status={status}
          currentCity={currentCity}
        />
      )}
      <Images
        mlsId={mlsId}
        isTablet={isTablet}
        lat={lat}
        lng={lng}
        images={images}
        address={address}
      />
      <Content rightCta="tour" ctaValues={{ savings, listing }} withContainer>
        {isDesktop && (
          <Address
            listPrice={listPrice}
            address={address}
            beds={beds}
            bathsTotal={bathsTotal}
            livingAreaSF={livingAreaSF}
            status={status}
            currentCity={currentCity}
          />
        )}
        <Description
          mlsId={mlsId}
          street={address.street}
          description={description}
        />
        <Spacer p="s" />
        <Details
          beds={beds}
          bathsTotal={bathsTotal}
          livingAreaSF={livingAreaSF}
          lotSizeAC={lotSizeAC}
          yearBuilt={yearBuilt}
          associationFee1={associationFee1}
          association1Frequency={association1Frequency}
          associationFee2={associationFee2}
          association2Frequency={association2Frequency}
          mlsId={mlsId}
          heating={heating}
          cooling={cooling}
          garageSpaces={garageSpaces}
          hasPool={hasPool}
          listingAgent={listingAgent}
          description={description}
          daysOnMarket={daysOnMarket}
        />
        <Spacer p="s" />
        <PointsOfInterest
          mlsId={mlsId}
          lat={lat}
          lng={lng}
          pointsOfInterest={pointsOfInterest}
          street={address.street}
        />
        <Spacer p="s" />
        <BannerAd
          heading={`The only buyer savings \n program in TN. Period.`}
          copy="Buy your home with felix and save 1.5% off the purchase price."
          href="/buy"
          buttonLabel="Learn More"
        />
        <Spacer p="s" />
        <Schools mlsId={mlsId} street={address.street} schools={schools} />
        <Spacer p="s" />
        <ListingDetails listing={listing} />
      </Content>
      <Spacer p="s" />
      <SimilarListings
        isMobile={isMobile}
        isTablet={isTablet}
        address={address}
        mlsId={mlsId}
        geometry={geometry}
      />
      <IDXDisclaimer isOnListing />
      <Blurb
        listing={listing}
        pointsOfInterest={pointsOfInterest}
        nearbyListings={nearbyListings}
      />
      <PopularSearches nearbyListings={nearbyListings} />
    </PageLayout>
  );
};

export async function getServerSideProps({ res, params }) {
  const { mlsId } = params;

  const listing = await getListing(mlsId);

  let nearbyListings = null;
  if (listing) {
    const { geometry } = listing;
    nearbyListings = await getNearbyListings(geometry, mlsId);
  } else {
    res.setHeader('location', '/homes-for-sale/city/tn/nashville');
    res.statusCode = 301;
    res.end();
    return {
      props: {},
    };
  }

  return {
    props: {
      listing,
      nearbyListings,
    },
  };
}

export default ListingPage;
