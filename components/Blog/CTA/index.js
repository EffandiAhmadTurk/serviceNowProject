import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';
import DefaultButton from 'components/common/DefaultButton';
import SectionTitle from 'components/common/SectionTitle';
import styles from './CTA.module.scss';

const CTA = () => {
  const { setIsListMyHomeModalOpen } = useContext(ModalContext);
  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <SectionTitle whiteTitle>Thinking of Buying or Selling?</SectionTitle>
        <p>
          Our local real estate experts will guide you throughout every step of
          the process while saving you crazy amounts of money along the way.
          Book a consultation today to&nbsp;get&nbsp;started.
        </p>
        <div className={styles['button-wrapper']}>
          <DefaultButton
            onClick={() => setIsListMyHomeModalOpen(true)}
            label="List my Home"
            variant="primary-white"
          />
          <DefaultButton
            label="Search for Homes"
            link="/feed"
            variant="secondary-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
