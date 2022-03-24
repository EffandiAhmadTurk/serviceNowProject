import clsx from 'clsx';
import styles from './TriangleWithCircle.module.scss';
import Container from '../Container';

const TriangleWithCircle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;

  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['triangle'], styles[primaryColor])} />
      <div className={clsx(styles['circle'], styles[secondaryColor])} />
    </Container>
  );
};

export default TriangleWithCircle;
