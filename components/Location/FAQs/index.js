import { useState, useEffect } from 'react';
import Accordion from 'components/common/Accordion';
import Section from '../common/Section';
import styles from './FAQs.module.scss';
import { MessageDots } from '@styled-icons/boxicons-solid';

const FAQs = ({ locationFaqContent }) => {
  if (!locationFaqContent) {
    return null;
  }

  const { items } = locationFaqContent || {};

  const initialState = items?.reduce((initialState, item, idx) => {
    return { ...initialState, ...{ [idx]: false } };
  }, {});

  const [accordionState, setAccordionState] = useState(initialState);

  if (!locationFaqContent) {
    return null;
  }

  useEffect(() => {
    const accordionState = {
      ...initialState,
      0: true,
    };
    setAccordionState(accordionState);
  }, []);

  let schema = {};

  if (locationFaqContent) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(faq => {
        return {
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        };
      }),
    };
  }

  return (
    <Section heading="FAQs" icon={<MessageDots size={32} />}>
      <div className={styles['container']}>
        {items?.map((item, index) => (
          <Accordion
            key={index}
            title={item.question}
            text={item.answer}
            isOpened={accordionState[index]}
            onClick={() =>
              setAccordionState(prevState => {
                return {
                  ...initialState,
                  [index]: !prevState[index],
                };
              })
            }
          />
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Section>
  );
};
export default FAQs;
