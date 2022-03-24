import clsx from 'clsx';
import styles from './TriangleWithRectangle.module.scss';
import Container from '../Container';

const TriangleWithRectangle = ({
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
      <div className={clsx(styles['rectangle'], styles[secondaryColor])} />
    </Container>
  );
};

export default TriangleWithRectangle;
