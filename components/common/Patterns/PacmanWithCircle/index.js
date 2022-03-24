import clsx from 'clsx';
import styles from './PacmanWithCircle.module.scss';
import Container from '../Container';

const PacmanWithCircle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;
  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['pacman-1'], styles[primaryColor])} />
      <div className={clsx(styles['pacman-2'], styles[primaryColor])} />
      <div className={clsx(styles['circle'], styles[secondaryColor])} />
    </Container>
  );
};

export default PacmanWithCircle;
