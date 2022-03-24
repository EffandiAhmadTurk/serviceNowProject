import styles from './LoadingGrid.module.scss';
import cslx from 'clsx';
import LoadingBox from 'components/common/LoadingBox';

const LoadingGrid = ({ isMapShown }) => {
  return (
    <div
      className={cslx(styles['container'], isMapShown && styles['map-grid'])}
    >
      {Array.from(Array(16).keys()).map((box, i) => {
        return <LoadingBox key={i} />;
      })}
    </div>
  );
};

export default LoadingGrid;
