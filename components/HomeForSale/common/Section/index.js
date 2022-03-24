import styles from './Section.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { CaretDown } from '@styled-icons/boxicons-regular';
import scrollToElement from 'utils/scrollToElement';

const Section = ({ children, heading, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    scrollToElement(id);
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles['container']} id={id}>
      <div className={styles['heading']}>
        <h2>{heading}</h2>
        <span
          className={clsx(styles['toggle'], isOpen && styles['open'])}
          onClick={handleButtonClick}
        >
          <CaretDown />
        </span>
      </div>
      <div className={clsx(styles['content'], isOpen && styles['open'])}>
        {children}
      </div>
    </section>
  );
};

export default Section;
