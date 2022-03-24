import styles from './HalfCircleWithCircle.module.scss';
import clsx from 'clsx';
import Container from '../Container';

const HalfCircleWithCircle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;

  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['half-circle'], styles[primaryColor])}></div>
      <div className={clsx(styles['circle'], styles[secondaryColor])}></div>
    </Container>
  );
};

export default HalfCircleWithCircle;
