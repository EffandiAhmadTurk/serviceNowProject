import { useContext } from 'react';
import { Dialog, makeStyles } from '@material-ui/core';
import styles from './ModalTemplate.module.scss';
import clsx from 'clsx';
import CloseButton from '../CloseButton';
import { ModalContext } from 'contexts/ModalContext';
import Loader from 'components/common/Loader';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiPaper-root': {
      borderRadius: 20,
    },
  },
}));

const ModalTemplate = props => {
  const classes = useStyles();
  const { isModalClosable } = useContext(ModalContext);
  const { handleClose, isLoading, children, isOpen, hideBackdrop } = props;

  return (
    <Dialog
      className={classes.root}
      hideBackdrop={hideBackdrop}
      onBackdropClick={handleClose}
      open={isOpen}
      fullWidth
    >
      <div className={styles['container']}>
        {!isLoading && (
          <>
            <img
              alt="pattern"
              src="/images/patterns/blue-circle-red-square.svg"
              className={clsx(styles['pattern'], styles['pattern-one'])}
            />
            <img
              src="/images/patterns/yellow-halfcircle-blue-cirlce.svg"
              alt="pattern"
              className={clsx(styles['pattern'], styles['pattern-two'])}
            />
          </>
        )}

        {isModalClosable && <CloseButton onClick={handleClose} />}
        {isLoading && <Loader />}
        {children}
      </div>
    </Dialog>
  );
};

export default ModalTemplate;
