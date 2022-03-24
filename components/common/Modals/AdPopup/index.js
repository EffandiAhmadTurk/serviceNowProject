import { useContext } from 'react';
import { Dialog, makeStyles } from '@material-ui/core';
import { ModalContext } from '../../../../contexts/ModalContext';
import BuyerAdContent from './BuyerAdContent';
import SellerAdContent from './SellerAdContent';
import CloseButton from '../common/CloseButton';

const useStyles = makeStyles(theme => ({
  dialog: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgb(242, 246, 254, 0.8)',
    },
    '& .MuiPaper-root': {
      borderRadius: 20,
    },
  },
}));

const AdPopup = () => {
  const { setAdPopupState, adPopupState } = useContext(ModalContext);
  const classes = useStyles();
  const { isOpen, audience } = adPopupState;

  const handleClose = () => {
    // Afer close, user will not see popup for 1 day
    setAdPopupState({ isOpen: false });
    const date = new Date();
    date.setDate(date.getDate() + 1);
    localStorage.setItem(`${audience}AdPopup`, date);
  };

  const getContent = audience => {
    switch (audience) {
      case 'Buyer':
        return <BuyerAdContent />;
      case 'Seller':
        return <SellerAdContent />;
      default:
        return <BuyerAdContent />;
    }
  };

  return (
    <Dialog
      className={classes.dialog}
      open={isOpen}
      onBackdropClick={handleClose}
    >
      <CloseButton white onClick={handleClose} />
      {getContent(audience)}
    </Dialog>
  );
};

export default AdPopup;
