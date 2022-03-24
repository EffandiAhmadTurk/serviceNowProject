import CurrencyFormat from '../../../utils/CurrencyFormat';
import { SquareFootage } from '../../../utils/SquareFootage';
import { Bed, Bath, ShapeSquare } from '@styled-icons/boxicons-regular';
import { Circle } from '@styled-icons/boxicons-solid';
import styles from './Address.module.scss';
import clsx from 'clsx';

const Address = ({
  address = {},
  listPrice,
  beds,
  bathsTotal,
  livingAreaSF,
  status,
}) => {
  const { street, city, state, zipCode } = address;

  return (
    <div className={styles['container']}>
      <div>
        <h1 className={styles['address']}>
          {street}&nbsp;
          <br />
          <span className={styles['city-state-zip']}>
            {city}, {state} {zipCode}
          </span>
        </h1>

        <div className={styles['quick-stats']}>
          <span className={styles['stat']}>
            <Bed size="22" /> {beds} Beds
          </span>
          <span className={styles['stat']}>
            <Bath size="22" />
            {bathsTotal} Baths
          </span>
          <span className={styles['stat']}>
            <ShapeSquare size="22" />
            <SquareFootage value={livingAreaSF} />
          </span>
        </div>
      </div>

      <div className={styles['price-wrapper']}>
        <CurrencyFormat className={styles['price']} value={listPrice} />

        <span className={styles['status-wrapper']}>
          <Circle
            size={18}
            type="solid"
            className={styles[status.split(' ').join('-').toLowerCase()]}
          />
          <p className={styles['status']}>{status}</p>
        </span>
      </div>
    </div>
  );
};

export default Address;
