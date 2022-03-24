import styles from './Spacer.module.scss';
import clsx from 'clsx';

const Spacer = ({ m, p, hideOnMobile }) => {
  return (
    <div
      className={clsx(
        styles['spacer'],
        styles[`m-${m}`],
        styles[`p-${p}`],
        hideOnMobile && styles['hide-on-mobile']
      )}
    />
  );
};

export default Spacer;
