import React, { useState } from 'react';
import Accordion from '../common/Accordion';
import styles from './FAQ.module.scss';

const Sellers = ({ faqs }) => {
  const [faqsState, setFaqsState] = useState({});

  const toggleFaq = questionId => {
    setFaqsState({ ...faqsState, [questionId]: !faqsState[questionId] });
  };

  return (
    <div className={styles['container']}>
      <h3 className={styles['header']}>Sellers</h3>
      <div className={styles['content']}>
        {faqs.map(({ question, answer }, idx) => (
          <Accordion
            key={idx}
            style={{ marginTop: 30 }}
            title={question}
            text={answer}
            isOpened={faqsState[question]}
            onClick={() => toggleFaq(question)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sellers;
