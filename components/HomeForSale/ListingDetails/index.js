import CurrencyFormat from '../../../utils/CurrencyFormat';
import { Information, ListItem } from './Information';
import DetailSection from './DetailSection';
import styles from './ListingDetails.module.scss';
import Section from '../common/Section';

const ListingDetails = ({ listing }) => {
  const {
    mlsId,
    address,
    appliances,
    kitchenDimensions,
    cooling,
    firePlacesTotal,
    hasFirePlace,
    flooring,
    bathsHalf,
    bathsFull,
    heating,
    bed1Dimensions,
    bed2Dimensions,
    bed3Dimensions,
    bed4Dimensions,
    bed5Dimensions,
    mainLevelBeds,
    diningRoomDimensions,
    garageSpaces,
    coveredSpaces,
    hasAttachedGarage,
    hasCarport,
    hasGarage,
    parkingFeatures,
    isSeniorCommunity,
    isWaterFront,
    sewer,
    waterSource,
    hasPool,
    poolFeatures,
    lotSizeAC,
    lotSizeDimensions,
    stories,
    taxLot,
    parcelNumber,
    yearBuilt,
    annualTaxAmount,
    levels,
    isNewConstruction,
    propertySubType,
    basement,
    listPrice,
    hasCooling,
    bed1Features,
    bed2Features,
    bed3Features,
    bed4Features,
    bed5Features,
    diningRoomFeatures,
    bonusRoomFeatures,
    bonusRoomDimensions,
    hasHeating,
    interiorFeatures,
    denFeatures,
    denDimensions,
    livingRoomFeatures,
    livingRoomDimensions,
    totalParking,
    greenEnergyEfficient,
    roof,
    patioAndPorchFeatures,
    lotSizeSource,
    isPropertyAttached,
    possession,
    architecturalStyle,
    associationAmenities,
    associationFeeIncludes,
  } = listing;

  const spaceBetweenCommas = value => {
    return value?.split(',').join(', ');
  };

  const spaceBetweenX = value => {
    return value?.split('x').join(' x ');
  };

  const yesOrNo = value => {
    return value ? 'Yes' : 'No';
  };

  return (
    <Section
      heading={`Listing Details for ${address.street}`}
      id={`${mlsId}-listing-details`}
    >
      <div className={styles['container']}>
        <DetailSection title="Interior Features">
          <div className={styles['column']}>
            <Information title="Kitchen Information">
              <ListItem
                title={'Appliances'}
                value={appliances}
                displayValue={spaceBetweenCommas(appliances)}
              />
              <ListItem
                title={'Kitchen Dimensions'}
                value={kitchenDimensions}
                displayValue={spaceBetweenX(kitchenDimensions)}
              />
            </Information>
            <Information title="Cooling Information">
              <ListItem title="Type" displayValue={cooling} value={cooling} />
              <ListItem
                title={'Has Cooling'}
                value={yesOrNo(hasCooling)}
                displayValue={cooling}
              />
            </Information>
            <Information title="Bathroom Information">
              <ListItem
                title={'Half Bathrooms'}
                displayValue={bathsHalf}
                value={bathsHalf}
              />
              <ListItem
                title={'Full Bathrooms'}
                displayValue={bathsHalf}
                value={bathsFull}
              />
            </Information>
            <Information title="Bedroom Information">
              <ListItem
                title={'Bedroom 1 Dimensions'}
                displayValue={spaceBetweenX(bed1Dimensions)}
                value={bed1Dimensions}
              />
              <ListItem
                title={'Bedroom 1 Features'}
                displayValue={bed1Features}
                value={bed1Features}
              />
              <ListItem
                title={'Bedroom 2 Dimensions'}
                displayValue={spaceBetweenX(bed2Dimensions)}
                value={bed2Dimensions}
              />
              <ListItem
                title={'Bedroom 2 Features'}
                displayValue={bed2Features}
                value={bed2Features}
              />
              <ListItem
                title={'Bedroom 3 Dimensions'}
                displayValue={spaceBetweenX(bed3Dimensions)}
                value={bed3Dimensions}
              />
              <ListItem
                title={'Bedroom 3 Features'}
                displayValue={bed3Features}
                value={bed3Features}
              />
              <ListItem
                title={'Bedroom 4 Dimensions'}
                displayValue={spaceBetweenX(bed4Dimensions)}
                value={bed4Dimensions}
              />
              <ListItem
                title={'Bedroom 4 Features'}
                displayValue={bed4Features}
                value={bed4Features}
              />

              <ListItem
                title={'Bedroom 5 Dimensions'}
                displayValue={spaceBetweenX(bed5Dimensions)}
                value={bed5Dimensions}
              />
              <ListItem
                title={'Bedroom 5 Features'}
                displayValue={bed5Features}
                value={bed5Features}
              />
              <ListItem
                title={'Main Level Bedrooms'}
                value={mainLevelBeds}
                displayValue={mainLevelBeds}
              />
            </Information>
            <Information title="Dining Room Information">
              <ListItem
                title={'Dining Room Dimensions'}
                displayValue={spaceBetweenX(diningRoomDimensions)}
                value={diningRoomDimensions}
              />
              <ListItem
                title={'Dining Room Features'}
                displayValue={diningRoomFeatures}
                value={diningRoomFeatures}
              />
            </Information>
            <Information title="Bonus Room Information">
              <ListItem
                title={'Bonus Room Dimensions'}
                displayValue={spaceBetweenX(bonusRoomDimensions)}
                value={bonusRoomDimensions}
              />
              <ListItem
                title={'Bonus Room Features'}
                displayValue={bonusRoomFeatures}
                value={bonusRoomFeatures}
              />
            </Information>
          </div>

          <div className={styles['column']}>
            <Information title="Fireplace Information">
              <ListItem
                title={'Number of Fireplaces'}
                displayValue={firePlacesTotal}
                value={firePlacesTotal}
              />
              <ListItem
                title={'Has fireplace'}
                displayValue={yesOrNo(hasFirePlace)}
                value={hasFirePlace}
              />
            </Information>
            <Information title="Flooring Information">
              <ListItem title="Type" value={flooring} displayValue={flooring} />
            </Information>
            <Information title="Heating Information">
              <ListItem
                title={'Has Heating'}
                displayValue={yesOrNo(hasHeating)}
                value={hasHeating}
              />
              <ListItem title={'Type'} value={heating} displayValue={heating} />
            </Information>
            <Information title="Interior Features">
              <ListItem
                title={'Interior Features'}
                displayValue={spaceBetweenCommas(interiorFeatures)}
                value={interiorFeatures}
              />
            </Information>
            <Information title="Den Information">
              <ListItem
                title={'Den Dimensions'}
                displayValue={spaceBetweenX(denDimensions)}
                value={denDimensions}
              />
              <ListItem
                title={'Den Features'}
                displayValue={denFeatures}
                value={denFeatures}
              />
            </Information>
            <Information title="Living Room Information">
              <ListItem
                title={'Living Room Dimensions'}
                displayValue={spaceBetweenX(livingRoomDimensions)}
                value={livingRoomDimensions}
              />
              <ListItem
                title={'Living Room Features'}
                displayValue={livingRoomFeatures}
                value={livingRoomFeatures}
              />
            </Information>
            <Information title="Basement Information">
              <ListItem
                title="Basement Features"
                value={basement}
                displayValue={basement}
              />
            </Information>
          </div>
        </DetailSection>

        <DetailSection title="Parking / Garage, School / Neighborhood, Utilities, Location Details">
          <div className={styles['column']}>
            <Information title="Parking / Garage Information">
              <ListItem
                title={'Garage Spaces'}
                displayValue={garageSpaces}
                value={garageSpaces}
              />
              <ListItem
                title={'Covered parking space'}
                displayValue={coveredSpaces}
                value={coveredSpaces}
              />
              <ListItem
                title={'Has Attached Garage'}
                value={hasAttachedGarage}
                displayValue={yesOrNo(hasAttachedGarage)}
              />
              <ListItem
                title={'Has Carport'}
                value={hasCarport}
                displayValue={yesOrNo(hasCarport)}
              />
              <ListItem
                title={'Has Garage'}
                displayValue={yesOrNo(hasGarage)}
                value={hasGarage}
              />
              <ListItem
                title={'Total Parking Spaces'}
                displayValue={totalParking}
                value={totalParking}
              />
              <ListItem
                title={'Parking Features'}
                displayValue={parkingFeatures}
                value={parkingFeatures}
              />
            </Information>
          </div>

          <div className={styles['column']}>
            <Information title="Utilities Information">
              <ListItem title={'Sewer'} displayValue={sewer} value={sewer} />
              <ListItem
                title={'Water Source'}
                displayValue={waterSource}
                value={waterSource}
              />
            </Information>
            <Information title="Waterfront">
              <ListItem
                title={'Is Waterfront Property'}
                displayValue={yesOrNo(isWaterFront)}
                value={isWaterFront}
              />
            </Information>
            <Information title="Senior Community">
              <ListItem
                title={'Is in Senior Community'}
                value={isSeniorCommunity}
                displayValue={yesOrNo(isSeniorCommunity)}
              />
            </Information>
          </div>
        </DetailSection>

        <DetailSection title="Exterior Features">
          <div className={styles['column']}>
            <Information title="Green Energy Features">
              <ListItem
                title={'Green Energy Efficient'}
                value={greenEnergyEfficient}
                displayValue={greenEnergyEfficient}
              />
            </Information>
            <Information title="Roof Information">
              <ListItem title={'Type'} value={roof} displayValue={roof} />
            </Information>
          </div>
          <div className={styles['column']}>
            <Information title="Exterior Features">
              <ListItem
                title={'Pool Features'}
                displayValue={poolFeatures}
                value={poolFeatures}
              />
              <ListItem
                title={'Has Pool'}
                displayValue={yesOrNo(hasPool)}
                value={hasPool}
              />
              <ListItem
                title={'Patio Features'}
                displayValue={spaceBetweenCommas(patioAndPorchFeatures)}
                value={patioAndPorchFeatures}
              />
            </Information>
          </div>
        </DetailSection>

        <DetailSection title="Property / Lot Details">
          <div className={styles['column']}>
            <Information title="Lot Information">
              <ListItem
                title={'Lot Size Source'}
                displayValue={lotSizeSource}
                value={lotSizeSource}
              />
              <ListItem
                title={'Lot Size (Acres)'}
                displayValue={lotSizeAC}
                value={lotSizeAC}
              />
              <ListItem
                title={'Lot Size Dimensions'}
                displayValue={spaceBetweenX(lotSizeDimensions)}
                value={lotSizeDimensions}
              />
              <ListItem
                title={'Stories'}
                displayValue={stories}
                value={stories}
              />
              <ListItem
                title={'Tax Lot'}
                displayValue={taxLot}
                value={taxLot}
              />
              <ListItem
                title={'County'}
                displayValue={address.county}
                value={address.county}
              />
              <ListItem
                title={'Parcel Number'}
                displayValue={parcelNumber}
                value={parcelNumber}
              />
            </Information>
          </div>
          <div className={styles['column']}>
            <Information title="Property Information">
              <ListItem
                title={'Common Walls (property attached)'}
                displayValue={yesOrNo(isPropertyAttached)}
                value={isPropertyAttached}
              />
              <ListItem
                title={'Year Built Details'}
                displayValue={yearBuilt}
                value={yearBuilt}
              />
              <ListItem
                title={'Possession'}
                displayValue={possession}
                value={possession}
              />
              <ListItem
                title={'Annual Tax Amount'}
                displayValue={<CurrencyFormat value={annualTaxAmount} />}
                value={annualTaxAmount}
              />
              <ListItem
                title={'Architectural Style'}
                displayValue={architecturalStyle}
                value={architecturalStyle}
              />
              <ListItem
                title={'Number of Levels'}
                displayValue={levels}
                value={levels}
              />
              <ListItem
                title={'New Construction'}
                displayValue={yesOrNo(isNewConstruction)}
                value={isNewConstruction}
              />
              <ListItem
                title={'Original List Price:'}
                displayValue={<CurrencyFormat value={listPrice} />}
                value={listPrice}
              />
              <ListItem
                title={'Property Sub-type'}
                displayValue={propertySubType}
                value={propertySubType}
              />
              <ListItem
                title={'Association fee includes'}
                displayValue={associationFeeIncludes}
                value={associationFeeIncludes}
              />
              <ListItem
                title={'Association Amenities'}
                displayValue={spaceBetweenCommas(associationAmenities)}
                value={associationAmenities}
              />
            </Information>
          </div>
        </DetailSection>
      </div>
    </Section>
  );
};

export default ListingDetails;
