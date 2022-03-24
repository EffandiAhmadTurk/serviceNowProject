import styles from './Accordion.module.scss';
import { Minus, Plus } from '@styled-icons/boxicons-regular';
import ReactMarkdown from 'react-markdown';

const Accordion = ({ isOpened, onClick, title, text, ...props }) => {
  return (
    <div className={styles['container']} onClick={onClick} style={props.style}>
      <div className={styles['text-wrapper']}>
        <h4 className={styles['title']}>{title}</h4>
        <div
          className={styles['description']}
          style={isOpened ? { maxHeight: 500 } : {}}
        >
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <div className={styles['button-wrapper']}>
        <button>{isOpened ? <Minus size={28} /> : <Plus size={28} />}</button>
      </div>
    </div>
  );
};

export default Accordion;
