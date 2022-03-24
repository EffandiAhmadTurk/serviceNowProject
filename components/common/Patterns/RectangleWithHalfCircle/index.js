import clsx from 'clsx';
import styles from './RectangleWithHalfCircle.module.scss';
import Container from '../Container';

const RectangleWithHalfCircle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;

  return (
    <Container scrollClass={scrollClass}>
      <div
        className={clsx(styles['half-circle'], styles[secondaryColor])}
      ></div>

      <div className={clsx(styles['rectangle'], styles[primaryColor])}></div>
    </Container>
  );
};

export default RectangleWithHalfCircle;
