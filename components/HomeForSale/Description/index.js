import styles from './Description.module.scss';
import Section from '../common/Section';

const Description = ({ description, street, mlsId }) => {
  return (
    <Section heading={`About ${street}`} id={`${mlsId}-description`}>
      <p className={styles['text']}>{description}</p>
    </Section>
  );
};
export default Description;
