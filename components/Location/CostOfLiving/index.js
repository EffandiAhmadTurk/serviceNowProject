import { Bar } from 'react-chartjs-2';
import Section from '../common/Section';
import styles from './CostOfLiving.module.scss';
import FormatedNumber from '../common/FormatedNumber';
import getMoreLess from 'utils/getMoreLess';
import ReactMarkdown from 'react-markdown';
import { BadgeDollar } from '@styled-icons/boxicons-solid';

const options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  scales: {
    tickWidth: 30,
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: 'CircularStd, sans-serif',
          fontColor: '#233759',
          fontSize: 12,
          padding: 5,
          min: 50,
          max: 150,
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

const CostOfLiving = ({
  locationName,
  locationCosts,
  locationCostOfLivingContent,
}) => {
  // Hide component if the location doesnt have any cost data
  if (!locationCosts) return null;

  const {
    overall,
    education,
    entertainment,
    food,
    utilities,
    healthcare,
  } = locationCosts;

  const overallCalc = 100 - overall;
  const educationCalc = 100 - education;
  const foodCalc = 100 - food;
  const entertainmentCalc = 100 - entertainment;
  const healthcareCalc = 100 - healthcare;
  const utilitiesCalc = 100 - utilities;

  const data = {
    labels: ['Education', 'Entertainment', 'Food', 'Utilities', 'Healthcare'],
    datasets: [
      {
        barPercentage: 0.3,
        data: [education, entertainment, food, utilities, healthcare],
        backgroundColor: [
          education > 100 ? '#ee6c4d' : '#6ecb63',
          entertainment > 100 ? '#ee6c4d' : '#6ecb63',
          food > 100 ? '#ee6c4d' : '#6ecb63',
          utilities > 100 ? '#ee6c4d' : '#6ecb63',
          healthcare > 100 ? '#ee6c4d' : '#6ecb63',
        ],
        hoverBackgroundColor: [
          education > 100 ? '#f18971' : '#8bd582',
          entertainment > 100 ? '#f18971' : '#8bd582',
          food > 100 ? '#f18971' : '#8bd582',
          utilities > 100 ? '#f18971' : '#8bd582',
          healthcare > 100 ? '#f18971' : '#8bd582',
        ],
      },
    ],
  };

  return (
    <Section
      icon={<BadgeDollar size={32} />}
      heading={`Cost of Living in ${locationName}`}
    >
      <div className={styles['container']}>
        <div className={styles['column']}>
          <Bar data={data} options={options} />
        </div>
        <div className={styles['column']}>
          {locationCostOfLivingContent && (
            <ReactMarkdown className={styles['text']}>
              {locationCostOfLivingContent}
            </ReactMarkdown>
          )}
          <ul className={styles['list']}>
            <li>
              Education costs{' '}
              <strong>
                {
                  <FormatedNumber
                    value={Math.abs(educationCalc)}
                    suffix={'%'}
                  />
                }{' '}
                {getMoreLess(educationCalc)}{' '}
              </strong>{' '}
              than the national average.
            </li>
            <li>
              Entertainment costs{' '}
              <strong>
                {
                  <FormatedNumber
                    value={Math.abs(entertainmentCalc)}
                    suffix={'%'}
                  />
                }{' '}
                {getMoreLess(entertainmentCalc)}{' '}
              </strong>{' '}
              than the national average.
            </li>
            <li>
              Food costs{' '}
              <strong>
                {<FormatedNumber value={Math.abs(foodCalc)} suffix={'%'} />}{' '}
                {getMoreLess(foodCalc)}{' '}
              </strong>
              than the national average.
            </li>
            <li>
              In {locationName} utilities costs{' '}
              <strong>
                {
                  <FormatedNumber
                    value={Math.abs(utilitiesCalc)}
                    suffix={'%'}
                  />
                }{' '}
                {getMoreLess(utilitiesCalc)}{' '}
              </strong>{' '}
              than the national average.
            </li>
            <li>
              Healthcare costs{' '}
              <strong>
                {
                  <FormatedNumber
                    value={Math.abs(healthcareCalc)}
                    suffix={'%'}
                  />
                }{' '}
                {getMoreLess(healthcareCalc)}{' '}
              </strong>{' '}
              than the national average.
            </li>
          </ul>
          <p className={styles['text']}>
            Overall, {locationName}’s cost of living is{' '}
            <strong>
              {<FormatedNumber value={Math.abs(overallCalc)} suffix="%" />}{' '}
              {getMoreLess(overallCalc)}
            </strong>{' '}
            expensive than the national average.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CostOfLiving;
