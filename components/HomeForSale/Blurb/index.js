import Link from 'next/link';
import { PriceFormat } from '../../../utils';
import styles from './Blurb.module.scss';

const calcAverage = listings => {
  const sum = listings.reduce((acc, item) => {
    return acc + item.listPrice;
  }, 0);

  return sum / listings.length;
};

const Blurb = ({ listing, nearbyListings, pointsOfInterest }) => {
  const {
    address = {},
    lotSizeAC,
    listPrice,
    beds,
    bathsTotal,
    mlsId,
    livingAreaSF,
    propertySubType,
    yearBuilt,
    daysOnMarket,
    schools = {},
  } = listing;

  const { street, county, city, state, zipCode, subdivision } = address;
  const { elementary, middle, high } = schools;

  const hasPriceAndSimilarListings = nearbyListings?.length && listPrice;
  const hasNearbyListings = nearbyListings?.length > 0;
  const hasSchools =
    Object.keys(schools).length !== 0 && schools.constructor === Object;
  const hasPointsOfInterest = pointsOfInterest.length > 0;

  // Similar listings
  const nearbyListingsCount = nearbyListings?.length;
  const nearbyListing1 = nearbyListings?.[0];
  const nearbyListing2 = nearbyListings?.[1];
  const nearbyListing3 = nearbyListings?.[2];

  const NearbyListings = () => (
    <>
      There are {nearbyListingsCount} other homes for sale in the vicinity of{' '}
      {street};{' '}
      {nearbyListing1 && (
        <Link
          href="/home-for-sale/[address]/[mlsId]"
          as={`/home-for-sale/${nearbyListing1?.slug}/${nearbyListing1?.mlsId}`}
        >
          <a>{nearbyListing1 && nearbyListing1.street}</a>
        </Link>
      )}
      {nearbyListing2 && (
        <>
          ,{' '}
          <Link
            href="/home-for-sale/[address]/[mlsId]"
            as={`/home-for-sale/${nearbyListing2?.slug}/${nearbyListing2?.mlsId}`}
          >
            <a>{nearbyListing2 && nearbyListing2.street}</a>
          </Link>
        </>
      )}{' '}
      {nearbyListing3 && (
        <>
          and{' '}
          <Link
            href="/home-for-sale/[address]/[mlsId]"
            as={`/home-for-sale/${nearbyListing3?.slug}/${nearbyListing3?.mlsId}`}
          >
            <a>{nearbyListing3 && nearbyListing3.street}</a>
          </Link>
        </>
      )}
      {'.'}
    </>
  );

  const PriceComparison = () => {
    const priceDifference = listPrice - Math.abs(calcAverage(nearbyListings));
    const averagePrice = calcAverage(nearbyListings);
    const heigherOrLower = averagePrice > 0 ? 'higher' : 'lower';

    return (
      <>
        {' '}
        {'which is '}
        {<PriceFormat value={priceDifference} />} {heigherOrLower}{' '}
        {'than the average list price of '}
        {<PriceFormat value={averagePrice} />} {'amongst similar listings in'}{' '}
        {city}
        {'.'}
      </>
    );
  };

  const Schools = () => {
    return (
      <>
        {`The elementary school near ${street} is ${elementary}, for Middle
    school, ${middle} and High School it's ${high}.`}
      </>
    );
  };

  const PointsOfInterest = () => {
    const names = pointsOfInterest.map(poi => poi.name).join(', ');
    return <>{`Nearby things to do include ${names}`}</>;
  };

  const wasbuiltIn = `${street} was built in year ${yearBuilt}`;
  const bedsBaths = `and features ${beds} bedrooms and ${bathsTotal} bathrooms`;
  const livingSize = `with a total square footage of ${livingAreaSF}`;
  const hasBeenOnMarkt = `${street} has been on the market for ${daysOnMarket} days `;
  const listPricing = `and the most recent list price for this house is `;

  return (
    <p className={styles['container']}>
      {street} is a {propertySubType} in the neighborhood {subdivision} on a{' '}
      {lotSizeAC} acres lot in the {city}, {state} {zipCode} in {county}.{' '}
      {yearBuilt && wasbuiltIn} {beds && bathsTotal && bedsBaths} {livingSize}.{' '}
      {daysOnMarket && hasBeenOnMarkt} {listPrice && listPricing}
      {listPrice && <PriceFormat value={listPrice} />}{' '}
      {hasPriceAndSimilarListings && <PriceComparison />}{' '}
      {hasNearbyListings && <NearbyListings />} {hasSchools && <Schools />}{' '}
      {`The MLS ID for ${street} is ${mlsId}. `}
      {hasPointsOfInterest && <PointsOfInterest />}
      {'.'}
    </p>
  );
};

export default Blurb;
