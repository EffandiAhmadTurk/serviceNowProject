import styles from './CardText.module.scss';

const CardText = ({ children }) => {
  return <p className={styles['text']}>{children}</p>;
};

export default CardText;
