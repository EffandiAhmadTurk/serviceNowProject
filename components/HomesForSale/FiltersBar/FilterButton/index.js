import { SliderAlt } from '@styled-icons/boxicons-regular';
import styles from './FilterButton.module.scss';

const FilterButton = props => {
  return (
    <button className={styles['button']} {...props}>
      <SliderAlt size="16" className={styles['icon']} />
      Adjust Filters
    </button>
  );
};

export default FilterButton;
