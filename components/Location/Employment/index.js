import { Doughnut } from 'react-chartjs-2';
import Section from '../common/Section';
import styles from './Employment.module.scss';
import CurrencyFormat from 'utils/CurrencyFormat';
import capitalize from 'utils/capitalize';
import FormatedNumber from '../common/FormatedNumber';
import { Briefcase } from '@styled-icons/boxicons-solid';

const options = {
  legend: {
    position: 'left',
    align: 'start',
    labels: {
      boxWidth: 14,
      fontSize: 14,
      fontFamily: 'CircularStd, sans-serif',
      fontColor: '#072967',
    },
  },
};

const Employment = ({
  locationEmployement,
  locationIncome,
  locationPopulation,
  locationName,
}) => {
  if (!locationEmployement) return null;

  const { average, median } = locationIncome;

  const employer1 = capitalize(locationEmployement[0][0]);
  const employer1Percent = locationEmployement[0][1];
  const employer2 = capitalize(locationEmployement[1][0]);
  const employer2Percent = locationEmployement[1][1];
  const employer3 = capitalize(locationEmployement[2][0]);
  const employer3Percent = locationEmployement[2][1];

  const otherPercent =
    100 - employer1Percent - employer2Percent - employer3Percent;

  const data = {
    labels: [employer1, employer2, employer3, 'Other'],
    datasets: [
      {
        label: 'Employment',
        data: [
          employer1Percent,
          employer2Percent,
          employer3Percent,
          otherPercent.toFixed(2),
        ],
        backgroundColor: ['#ee6c4d', '#6ecb63', '#5577f2', '#ffcd59'],
        hoverBackgroundColor: ['#f18971', '#8bd582', '#7793f5', '#ffd77a'],
      },
    ],
  };

  return (
    <Section
      heading={`Job Market of ${locationName}`}
      icon={<Briefcase size={32} />}
    >
      <div className={styles['container']}>
        <div className={styles['column']}>
          {locationPopulation && (
            <p className={styles['total']}>
              <FormatedNumber value={locationPopulation} /> Total Popultation
            </p>
          )}

          <div className={styles['chart']}>
            <Doughnut options={options} data={data} />
          </div>
        </div>
        <div className={styles['column']}>
          <p className={styles['text']}>
            The median household income in {locationName} is{' '}
            <strong>{<CurrencyFormat value={median} />}</strong> and the average
            household income in {locationName} is{' '}
            <strong>{<CurrencyFormat value={average} />}</strong>.{' '}
            <strong>
              {<FormatedNumber value={employer1Percent} suffix={'%'} />}
            </strong>{' '}
            of the population people works in {employer1},{' '}
            <strong>
              {<FormatedNumber value={employer2Percent} suffix={'%'} />}
            </strong>{' '}
            works in {employer2}, and{' '}
            <strong>
              {<FormatedNumber value={employer3Percent} suffix={'%'} />}
            </strong>{' '}
            works in {capitalize(employer3)}.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Employment;
