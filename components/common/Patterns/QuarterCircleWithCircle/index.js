import clsx from 'clsx';
import styles from './QuarterCircleWithCircle.module.scss';
import Container from '../Container';

const QuarterCircleWithCircle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;
  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['quarter-circle'], styles[primaryColor])} />
      <div className={clsx(styles['circle'], styles[secondaryColor])} />
    </Container>
  );
};

export default QuarterCircleWithCircle;
