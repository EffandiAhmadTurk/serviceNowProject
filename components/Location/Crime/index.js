import { Bar } from 'react-chartjs-2';
import Section from '../common/Section';
import styles from './Crime.module.scss';
import FormatedNumber from '../common/FormatedNumber';
import getMoreLess from 'utils/getMoreLess';
import ReactMarkdown from 'react-markdown';
import { Ambulance } from '@styled-icons/boxicons-solid';

const Crime = ({ locationName, locationCrime, locationCrimeContent }) => {
  // Hide component if the location doesnt have any crime data
  if (!locationCrime) return null;

  const { assault, burglary, robbery, vehicle } = locationCrime;

  const data = {
    labels: ['Assaults', 'Burglaries', 'Roberies', 'Vehicle Theft'],
    datasets: [
      {
        barPercentage: 0.3,
        data: [assault, burglary, robbery, vehicle],
        backgroundColor: [
          assault > 100 ? ' #ee6c4d' : '#6ecb63',
          burglary > 100 ? ' #ee6c4d' : '#6ecb63',
          robbery > 100 ? ' #ee6c4d' : '#6ecb63',
          vehicle > 100 ? ' #ee6c4d' : '#6ecb63',
        ],
        hoverBackgroundColor: [
          assault > 100 ? '#f18971' : '#8bd582',
          burglary > 100 ? '#f18971' : '#8bd582',
          robbery > 100 ? '#f18971' : '#8bd582',
          vehicle > 100 ? '#f18971' : '#8bd582',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontFamily: 'CircularStd, sans-serif',
            fontColor: '#233759',
            fontSize: 12,
            padding: 5,
            min: 20,
            max: 180,
            callback: function (value, index, values) {
              if (value === 100) return `US Median`;
            },
          },
          gridLines: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontFamily: 'CircularStd, sans-serif',
            fontColor: '#233759',
            fontSize: 14,
          },
        },
      ],
    },
  };

  const assaultCalc = 100 - assault;
  const burglaryCalc = 100 - burglary;
  const robberyCalc = 100 - robbery;
  const vehicleCalc = 100 - vehicle;

  return (
    <Section
      icon={<Ambulance size={32} />}
      heading={`Crime in ${locationName}`}
    >
      <div className={styles['container']}>
        <div className={styles['column']}>
          <div className={styles['chart']}>
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className={styles['column']}>
          <p className={styles['text']}>
            In the past year in {locationName} there were{' '}
            <strong>
              {' '}
              {
                <FormatedNumber value={Math.abs(assaultCalc)} suffix={'%'} />
              }{' '}
              {getMoreLess(assaultCalc)}{' '}
            </strong>
            assaults,{' '}
            <strong>
              {<FormatedNumber value={Math.abs(burglaryCalc)} suffix={'%'} />}{' '}
              {getMoreLess(burglaryCalc)}{' '}
            </strong>{' '}
            burglaries,{' '}
            <strong>
              {<FormatedNumber value={Math.abs(robberyCalc)} suffix={'%'} />}{' '}
              {getMoreLess(robberyCalc)}{' '}
            </strong>{' '}
            robberies,{' '}
            <strong>
              {<FormatedNumber value={Math.abs(vehicleCalc)} suffix={'%'} />}{' '}
              {getMoreLess(vehicleCalc)}
            </strong>{' '}
            vehicle thefts compared to the national median.
          </p>
          {locationCrimeContent && (
            <ReactMarkdown className={styles['text']}>
              {locationCrimeContent}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Crime;
