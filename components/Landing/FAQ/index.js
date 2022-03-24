import styles from './FAQ.module.scss';
import Link from 'next/link';
import Accordion from 'components/common/Accordion';
import { useState } from 'react';

const FAQ = ({ faqs = [] }) => {
  const [faqsState, setFaqsState] = useState({});

  const toggleFaq = questionId => {
    setFaqsState({ ...faqsState, [questionId]: !faqsState[questionId] });
  };

  return (
    <section className={styles['container']}>
      <div className={styles['wrapper']}>
        <h2>Your questions answered.</h2>
        <div className={styles['contact']}>
          <div>
            <span>Basic questions? </span>
            <Link href="/faqs">
              <a>See our FAQs.&nbsp;</a>
            </Link>
          </div>
          <div>
            <span>Not so basic questions? </span>
            <a href={'tel:615-354-5731'}>615-354-5731</a>
          </div>
        </div>
        <div className={styles['faqs-wrapper']}>
          {faqs.map(({ question, answer }) => (
            <Accordion
              title={question}
              text={answer}
              key={question}
              isOpened={faqsState[question]}
              onClick={() => toggleFaq(question)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
