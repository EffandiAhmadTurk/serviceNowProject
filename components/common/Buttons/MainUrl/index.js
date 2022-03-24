import styles from '../Buttons.module.scss';
import clsx from 'clsx';

const MainUrl = ({
  title,
  style,
  target,
  href,
  className = null,
  variant = 'default',
}) => {
  return (
    <a
      target={target}
      rel="noreffer"
      href={href}
      className={clsx(
        styles['main-link'],
        className,
        variant === 'black' && styles['main-black']
      )}
      style={style}
    >
      {title}
    </a>
  );
};

export default MainUrl;
