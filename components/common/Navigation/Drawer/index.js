import { Drawer as MuiDrawer } from '@material-ui/core';
import { useContext } from 'react';
import Link from 'next/link';
import { ModalContext } from '../../../../contexts/ModalContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import styles from '../Navigation.module.scss';

const Drawer = ({ open, handleMenuClose }) => {
  const { setIsLoginModalOpen, setIsSignupModalOpen } = useContext(
    ModalContext
  );
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <MuiDrawer anchor="right" open={open} onClose={handleMenuClose}>
      <div className={styles['drawer-box']}>
        <div className={styles['drawer-links']}>
          <a href={'tel:6153545731'} className={styles['phone-top']}>
            <img src={'/icons/phone-icon.svg'} alt={'phone-icon'} />
            615.354.5731
          </a>

          <Link href="/sell">
            <a className={styles['menu-link']}>Sell</a>
          </Link>

          <Link href="/buy">
            <a className={styles['menu-link']}>Buy</a>
          </Link>

          <Link href="/feed">
            <a className={styles['menu-link']}>Search Homes</a>
          </Link>

          <Link href="/reviews">
            <a className={styles['menu-link']}>Reviews</a>
          </Link>

          <Link href="/blog">
            <a className={styles['menu-link']}>Blog</a>
          </Link>
        </div>
        <div className={styles['buttons']}>
          <div className={styles['auth-buttons']}>
            {isAuthenticated ? (
              <button
                className={styles['auth-button']}
                onClick={() => logout()}
              >
                Log out
              </button>
            ) : (
              <>
                <button
                  className={styles['auth-button']}
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Log in
                </button>
                <button
                  className={styles['auth-button']}
                  onClick={() => setIsSignupModalOpen(true)}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
