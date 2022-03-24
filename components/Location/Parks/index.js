import ReactMarkdown from 'react-markdown';
import Section from '../common/Section';
import Park from './Park';
import styles from './Parks.module.scss';
import { Tree } from '@styled-icons/boxicons-solid';

const Parks = ({ locationName, locationParks, locationParksContent }) => {
  if (!locationParks.length && !locationParksContent) return null;

  return (
    <Section
      icon={<Tree size={32} />}
      heading={`Parks and Recreation in ${locationName}`}
    >
      <div className={styles['container']}>
        {locationParksContent && (
          <ReactMarkdown allowDangerousHtml className={styles['text']}>
            {locationParksContent}
          </ReactMarkdown>
        )}
        <div className={styles['parks']}>
          {locationParks.map(({ id, name, address, description }) => (
            <Park
              key={id}
              name={name}
              adress={address}
              description={description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Parks;
