import { useState } from 'react';
import Section from '../common/Section';
import styles from './RealEstateTrends.module.scss';
import CurrencyFormat from 'utils/CurrencyFormat';
import FormatedNumber from '../common/FormatedNumber';
import ReactMarkdown from 'react-markdown';
import { BarChartSquare } from '@styled-icons/boxicons-solid';
import { Bulb, Calendar } from '@styled-icons/boxicons-regular';
import clsx from 'clsx';

const Chip = ({ icon = null, value, text, className }) => (
  <div className={clsx(styles['chip'], styles[className])}>
    <span>{icon}</span>

    <div>
      <div className={styles['value']}>{value}</div>
      <div className={styles['text']}>{text}</div>
    </div>
  </div>
);

const RealEstateTrends = ({
  locationName,
  locationTrendsContent,
  locationStats,
  locationActiveListingsTotal,
}) => {
  if (!locationStats) return null;

  const [isFullText, setIsFullText] = useState(false);
  const readMoreHandler = () => setIsFullText(!isFullText);

  // stats
  const {
    averageDaysOnMarket,
    averageListPrice,
    averageClosePrice,
    closeListPriceRatio,
  } = locationStats || {};

  return (
    <Section
      icon={<BarChartSquare size={32} />}
      heading={`Real Estate Trends of ${locationName}`}
    >
      <div className={styles['container']}>
        <div className={styles['column']}>
          <div className={styles['chips']}>
            <div className={styles['row']}>
              <Chip
                icon={<Bulb size={42} />}
                className={'blue'}
                value={<FormatedNumber value={locationActiveListingsTotal} />}
                text="Active Listing"
              />

              <Chip
                icon={<Calendar size={42} />}
                className={'green'}
                value={<FormatedNumber value={averageDaysOnMarket} />}
                text="Avg. Days on Market"
              />
            </div>
            <div className={styles['row']}>
              <Chip
                className={'secondary'}
                value={<CurrencyFormat value={averageListPrice} />}
                text="Average Listing Price"
              />
              <Chip
                className={'secondary'}
                value={<CurrencyFormat value={averageClosePrice} />}
                text="Average Sales Price"
              />
              <Chip
                className={'secondary'}
                value={
                  <FormatedNumber value={closeListPriceRatio} suffix="%" />
                }
                text="Sales-to-list Ratio"
              />
            </div>
          </div>
        </div>
        {locationTrendsContent && (
          <div className={styles['column']}>
            <div
              className={clsx(
                styles['text'],
                isFullText && styles['full-text']
              )}
            >
              <ReactMarkdown>{locationTrendsContent}</ReactMarkdown>{' '}
            </div>

            <span className={styles['more-link']} onClick={readMoreHandler}>
              Read&nbsp;{isFullText ? 'less' : 'more'}
            </span>
          </div>
        )}
      </div>
    </Section>
  );
};
export default RealEstateTrends;
