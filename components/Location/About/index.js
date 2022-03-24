import { Rating } from '@material-ui/lab';
import { Binoculars } from '@styled-icons/boxicons-solid';
import Section from '../common/Section';
import styles from './About.module.scss';
import ReactMarkdown from 'react-markdown';
import FormatedNumber from '../common/FormatedNumber';

const About = ({
  locationReviewAverage,
  locationReviewCount,
  locationName,
  locationAboutContent,
}) => {
  if (!locationAboutContent) return null;

  return (
    <Section
      heading={`Learn about ${locationName}`}
      icon={<Binoculars size={32} />}
    >
      <div className={styles['container']}>
        <div className={styles['rating-wrapper']}>
          <Rating
            className={styles['rating']}
            readOnly
            value={locationReviewAverage}
            precision={0.5}
          />
          <FormatedNumber
            className={styles['score']}
            fixedDecimalScale
            value={locationReviewAverage}
          />
          <a href="#location-reviews" className={styles['link']}>
            ({locationReviewCount} Review{locationReviewCount > 1 ? 's' : null})
          </a>
        </div>

        <div className={styles['content-wrapper']}>
          {locationAboutContent && (
            <ReactMarkdown className={styles['text']}>
              {locationAboutContent}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </Section>
  );
};

export default About;
