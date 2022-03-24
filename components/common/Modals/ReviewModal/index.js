import { useContext } from 'react';
import { ModalContext } from '../../../../contexts/ModalContext';
import ModalTemplate from '../common/ModalTemplate';
import ReactMarkdown from 'react-markdown';
import styles from './ReviewModal.module.scss';

const LocationReviewModal = () => {
  const { setReviewModalState, reviewModalState } = useContext(ModalContext);

  const handleClose = () => {
    setReviewModalState({ isOpen: false, review: null });
  };

  return (
    <ModalTemplate isOpen={reviewModalState.isOpen} handleClose={handleClose}>
      <ReactMarkdown className={styles['container']}>
        {reviewModalState.review}
      </ReactMarkdown>
    </ModalTemplate>
  );
};

export default LocationReviewModal;
