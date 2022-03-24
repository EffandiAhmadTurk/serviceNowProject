import styles from './Section.module.scss';
import clsx from 'clsx';

const Section = ({ children, heading, icon, container }) => {
  return (
    <section
      className={clsx(
        styles['container'],
        container && styles['container-width']
      )}
    >
      <div className={styles['heading-wrapper']}>
        <span className={styles['icon']}>{icon}</span>
        <h2>{heading}</h2>
      </div>

      {children}
    </section>
  );
};

export default Section;
