import clsx from 'clsx';
import Section from '../common/Section';
import styles from './ProsAndCons.module.scss';
import ReactMarkdown from 'react-markdown';
import { Like } from '@styled-icons/boxicons-solid';

const ProsAndCons = ({
  locationName,
  locationProsContent,
  locationConsContent,
}) => {
  if (!locationProsContent && !locationConsContent) return null;

  return (
    <Section
      heading={`Pros & Cons of living in ${locationName}`}
      icon={<Like size={32} />}
    >
      <div className={styles['container']}>
        <div className={clsx(styles['wrapper'], styles['pros'])}>
          <h3 className={styles['card-title']}>Pros</h3>
          <ReactMarkdown allowDangerousHtml className={styles['content']}>
            {locationProsContent}
          </ReactMarkdown>
        </div>
        <div className={clsx(styles['wrapper'], styles['cons'])}>
          <h3 className={styles['card-title']}>Cons</h3>
          <div className={styles['card-list']}>
            <ReactMarkdown allowDangerousHtml className={styles['content']}>
              {locationConsContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProsAndCons;
