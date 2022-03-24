import ModalCopy from '../ModalCopy';
import DefaultButton from 'components/common/DefaultButton';
import Spacer from 'components/common/Spacer';

const ModalSuccess = ({ handleClose, text }) => {
  return (
    <div>
      <ModalCopy>{text}</ModalCopy>

      <Spacer m="m" />

      <DefaultButton
        id="consultation-success-button"
        onClick={handleClose}
        label={'Close'}
        variant="primary"
      />
    </div>
  );
};

export default ModalSuccess;
