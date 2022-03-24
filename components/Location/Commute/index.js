import clsx from 'clsx';
import Section from '../common/Section';
import styles from './Commute.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from 'components/common/LoadingBox';
import ReactMarkdown from 'react-markdown';
import { Cycling, Walk, Bus } from '@styled-icons/boxicons-regular';

const Score = ({ title, icon, rating, description }) => {
  const getColor = rating => {
    if (!rating) return styles['grey'];

    if (rating <= 100 && rating >= 70) {
      return styles['green'];
    } else if (rating <= 69 && rating >= 40) {
      return styles['yellow'];
    } else {
      return styles['coral'];
    }
  };

  return (
    <div className={clsx(styles['score-wrapper'], getColor(rating))}>
      <h3>{title} Score ®</h3>
      <div className={styles['rating-block']}>
        {icon}
        <span className={styles['rating']}>{rating || 'N/A'}</span>
        <span className={styles['score']}> / 100</span>
      </div>
      <p className={styles['description']}>{description}</p>
    </div>
  );
};

const getCommuteScores = async geo => {
  try {
    const { data: commuteScores } = await axios.get(
      '/api/locations/commute-scores',
      {
        params: {
          ...geo,
        },
      }
    );
    return commuteScores;
  } catch (error) {
    throw error.message;
  }
};

const Error = () => (
  <div className={styles['error']}>
    <h3>Please check back later.</h3>
    <h4>Unfortunately we're unable to provide commute scores at this time.</h4>
  </div>
);

const Commute = ({
  locationName,
  locationLat,
  locationLng,
  locationCommuteContent,
}) => {
  const [commuteScores, setCommuteScores] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const commuteScores = await getCommuteScores({
          lat: locationLat,
          lng: locationLng,
        });
        setCommuteScores(commuteScores);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const { walk, bike, transit } = commuteScores || {};
  const { score: walkScore, description: walkDescription } = walk || {};
  const { score: bikeScore, description: bikeDescription } = bike || {};
  const { score: transitScore, description: transitDescription } =
    transit || {};

  return (
    <Section
      icon={<Cycling size={32} />}
      heading={`How to get around in ${locationName}`}
    >
      <div className={styles['container']}>
        {locationCommuteContent && (
          <ReactMarkdown allowDangerousHtml className={styles['text']}>
            {locationCommuteContent}
          </ReactMarkdown>
        )}
        <div className={styles['score-container']}>
          {isLoading &&
            Array.from(Array(3).keys()).map((box, i) => {
              return <LoadingBox key={i} />;
            })}

          {isError && <Error />}
          {!isLoading && !isError && (
            <>
              <Score
                title="Walk"
                icon={<Walk size={32} />}
                rating={walkScore}
                description={walkDescription}
              />
              <Score
                title="Bike"
                icon={<Cycling size={32} />}
                rating={bikeScore}
                description={bikeDescription}
              />
              <Score
                title="Transit"
                icon={<Bus size={32} />}
                rating={transitScore}
                description={transitDescription}
              />
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
export default Commute;
