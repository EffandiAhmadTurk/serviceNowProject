import { useContext } from 'react';
import styles from './Contact.module.scss';
import { ModalContext } from 'contexts/ModalContext';
import DefaultButton from 'components/common/DefaultButton';
import {
  HalfCircleWithCircle,
  PacmanWithCircle,
} from 'components/common/Patterns';

const Contact = () => {
  const { setIsLetsChatModalOpen } = useContext(ModalContext);
  return (
    <section className={styles['contact']}>
      <div className={styles['pattern-one']}>
        <HalfCircleWithCircle
          primaryColor="blue"
          secondaryColor="red"
          rotateDirection="left"
        />
      </div>
      <div className={styles['pattern-two']}>
        <PacmanWithCircle
          primaryColor="yellow"
          secondaryColor="blue"
          rotateDirection="right"
        />
      </div>

      <div className={styles['wrapper']}>
        <div className={styles['content']}>
          <h3>Talk to felix and save some serious money, seriously!</h3>
          <p>
            Whether you’re looking to have a 5 minute chat about the market or
            need some tips on buying or selling a home, our friendly agents are
            here to help.
          </p>
          <div className={styles['actions']}>
            <DefaultButton
              onClick={() => setIsLetsChatModalOpen(true)}
              label="Let's Chat!"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
