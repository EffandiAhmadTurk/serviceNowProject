import styles from './BookATourCta.module.scss';
import { useContext } from 'react';
import DefaultButton from 'components/common/DefaultButton';
import Link from 'next/link';
import SearchContext from 'contexts/SearchContext';
import { ModalContext } from 'contexts/ModalContext';
import submitGoalToGoogleTagManager from 'utils/submitGoalToGoogleTagManager';
import convertListItemToDataLayer from 'utils/convertListItemToDataLayer';

const BookATourCta = ({ isDesktop, savings, listing }) => {
  const { searchString } = useContext(SearchContext);
  const { setScheduleTourModal } = useContext(ModalContext);

  const handleClick = listing => {
    const { address, path } = listing;

    submitGoalToGoogleTagManager({
      event: 'clearEcommerce',
      ecommerce: null,
    });
    submitGoalToGoogleTagManager({
      event: 'beginCheckout',
      ecommerce: {
        items: [
          convertListItemToDataLayer({
            el: listing,
            index: 1,
            search: searchString,
          }),
        ],
      },
    });
    setScheduleTourModal({
      isOpen: true,
      listing,
      address: address.full,
      addressLink: `${window.location.origin}${path}`,
    });
  };

  const desktopContent = (
    <div className={styles['desktop-container']}>
      <h3>
        Buy with felix <br />
        and save <span>${savings}</span>
      </h3>
      <p>
        Curious about our Buyer Savings Program?
        <Link href="/buy">
          <a>Learn More</a>
        </Link>
      </p>
      <div className={styles['divider']} />
      <DefaultButton
        onClick={() => handleClick(listing)}
        label="Book a tour"
        variant="primary"
      />
    </div>
  );

  const mobileContent = (
    <div className={styles['mobile-container']}>
      <div className={styles['wrapper']}>
        <h3>
          Buy with felix and save <span>{savings}</span>.&nbsp;
          <Link href="/buy">
            <a>Learn More</a>
          </Link>
        </h3>

        <DefaultButton
          onClick={() => handleClick(listing)}
          label="Book a tour"
          variant="primary"
        />
      </div>
    </div>
  );

  if (isDesktop) {
    return desktopContent;
  } else {
    return mobileContent;
  }
};

export default BookATourCta;
