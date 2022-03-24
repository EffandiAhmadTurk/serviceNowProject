import NumberFormat from 'react-number-format';
import { SquareFootage } from '../../../utils/SquareFootage';
import Section from '../common/Section';
import ListItem from '../common/ListItem';
import List from '../common/List';
import styles from './Details.module.scss';
import { Circle } from '@styled-icons/boxicons-solid';

const Details = props => {
  const {
    beds,
    bathsTotal,
    livingAreaSF,
    lotSizeAC,
    yearBuilt,
    associationFee1,
    association1Frequency,
    associationFee2,
    association2Frequency,
    mlsId,
    heating,
    cooling,
    garageSpaces,
    hasPool,
    listingAgent = {},
    daysOnMarket,
  } = props;

  const listItems = [
    { label: 'Bedrooms', value: beds },
    { label: 'Bathrooms', value: bathsTotal },
    { label: 'Home Size', value: <SquareFootage value={livingAreaSF} /> },
    {
      label: 'Lot Size',
      value: (
        <NumberFormat
          value={Number(lotSizeAC)}
          displayType={'text'}
          thousandSeparator={true}
          suffix={' acres'}
        />
      ),
    },
    { label: 'Year Built', value: yearBuilt },
    {
      label: 'HOA',
      value: associationFee1 ? (
        <NumberFormat
          value={associationFee1}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={0}
          suffix={` / ${association1Frequency}`}
        />
      ) : null,
    },
    {
      label: 'HOA Transfer Fee',
      value: associationFee2 ? (
        <NumberFormat
          value={associationFee2}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={0}
          suffix={` / ${association2Frequency}`}
        />
      ) : null,
    },
    { label: 'MLS #', value: mlsId?.substring(3) },
    { label: 'Heating', value: heating },
    { label: 'Cooling', value: cooling },
    { label: 'Garage', value: garageSpaces },
    { label: 'Pool', value: hasPool ? 'Yes' : 'No' },
    { label: 'Days on Market', value: daysOnMarket?.toString() },
  ];

  return (
    <Section heading="Property Details" id={`${mlsId}-details`}>
      <div className={styles['container']}>
        <List>
          {listItems.map(({ label, value }, index) => {
            return <ListItem key={index} label={label} value={value} />;
          })}
        </List>

        <p className={styles['listed-by']}>
          Listed By: &nbsp;
          <span>
            {listingAgent.firstName} {listingAgent.lastName}
            <Circle size={12} />
            {listingAgent.officeName}
          </span>
        </p>
      </div>
    </Section>
  );
};

export default Details;
