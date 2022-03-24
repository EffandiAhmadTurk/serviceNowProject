import { forwardRef } from 'react';
import styles from './DefaultButton.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

const Button = forwardRef((props, ref) => {
  const { label, onClick, mobile, type, variant } = props;
  return (
    <button
      ref={ref}
      className={clsx(styles['button'], styles[variant])}
      type={type}
      onClick={onClick}
      style={{
        ...props.style,
        ...(mobile ? { maxWidth: 160, width: '100%' } : {}),
      }}
    >
      {label}
    </button>
  );
});

const DefaultButton = props => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles['link']} target={props.target}>
          <Button {...props} />
        </a>
      </Link>
    );
  } else {
    return <Button {...props} />;
  }
};

export default DefaultButton;
