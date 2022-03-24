import styles from './DonutWithRectangle.module.scss';
import clsx from 'clsx';
import Container from '../Container';

const DonutWithRectangle = ({
  primaryColor,
  secondaryColor,
  rotateDirection,
}) => {
  let scrollClass = rotateDirection
    ? rotateDirection + '-scroll-pattern'
    : null;

  return (
    <Container scrollClass={scrollClass}>
      <div className={clsx(styles['donut'], styles[primaryColor])} />
      <div class={clsx(styles['rectangle'], styles[secondaryColor])} />
    </Container>
  );
};

export default DonutWithRectangle;
