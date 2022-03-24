import styles from './HalfCircleWithRectangle.module.scss';
import clsx from 'clsx';
import Container from '../Container';

const HalfCircleWithRectangle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;

  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['half-circle'], styles[primaryColor])} />
      <div className={clsx(styles['rectangle'], styles[secondaryColor])} />
    </Container>
  );
};

export default HalfCircleWithRectangle;
