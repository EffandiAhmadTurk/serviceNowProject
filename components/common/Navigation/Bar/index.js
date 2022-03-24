import { useState, useRef, useContext, useEffect } from 'react';
import Link from 'next/link';
import DefaultButton from '../../DefaultButton';
import { ModalContext } from '../../../../contexts/ModalContext';
import styles from '../Navigation.module.scss';
import { AuthContext } from '../../../../contexts/AuthContext';
import clsx from 'clsx';
import { Phone, User } from '@styled-icons/boxicons-solid';
import { useRouter } from 'next/router';

const Dropdown = ({ children }) => (
  <div className={styles['dropdown']}>{children}</div>
);

const Button = ({ children, onClick }) => (
  <button className={styles['drop-btn']} onClick={onClick}>
    {children}
  </button>
);

const isActive = (match, path) => {
  return path.includes(match);
};

const Bar = ({ mobileMenuOpenHandler, variant, isBlack }) => {
  const { setIsLoginModalOpen, setIsSignupModalOpen } =
    useContext(ModalContext) || {};
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { pathname } = useRouter();

  const menu = useRef();

  const [showLoginItems, setShowLoginItems] = useState(false);

  const handleClick = e => {
    if (menu.current.contains(e.target)) {
      return;
    }
    setShowLoginItems(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      <div className={styles['items-wrapper']} ref={menu}>
        <button
          className={clsx(
            styles['mobile-menu-button'],
            isBlack && styles['black']
          )}
          onClick={mobileMenuOpenHandler}
        />
        <div className={styles['menu-items']}>
          <div className={clsx(styles['links'], isBlack && styles['black'])}>
            <Link href="/sell">
              <a
                className={clsx(
                  styles['link'],
                  isActive('sell', pathname) && styles['active']
                )}
              >
                Sell
              </a>
            </Link>
            <Link href="/buy">
              <a
                className={clsx(
                  styles['link'],
                  isActive('buy', pathname) && styles['active']
                )}
              >
                Buy
              </a>
            </Link>
            <Link href="/feed">
              <a
                className={clsx(
                  styles['link'],
                  isActive('feed', pathname) && styles['active']
                )}
              >
                Search Homes
              </a>
            </Link>
            <Link href="/reviews">
              <a
                className={clsx(
                  styles['link'],
                  isActive('reviews', pathname) && styles['active']
                )}
              >
                Reviews
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={clsx(
                  styles['link'],
                  isActive('blog', pathname) && styles['active']
                )}
              >
                Blog
              </a>
            </Link>
          </div>
          <div className={clsx(styles['right-nav'], styles[variant])}>
            <a
              href={'tel:6153545731'}
              className={clsx(styles['phone'], isBlack && styles['black'])}
            >
              <Phone className={styles['phone-icon']} />
              615.354.5731
            </a>

            <div className={styles['buttons']}>
              <div className={styles['auth-buttons']}>
                {isAuthenticated ? (
                  <div
                    className={clsx(
                      styles['logout'],
                      styles[variant],
                      isBlack && styles['black']
                    )}
                  >
                    <DefaultButton
                      label="Logout"
                      onClick={() => logout()}
                      variant="secondary"
                    />
                  </div>
                ) : (
                  <Dropdown>
                    <Button onClick={() => setShowLoginItems(!showLoginItems)}>
                      <User
                        className={clsx(
                          styles['auth-icon'],
                          isBlack && styles['black'],
                          styles[variant]
                        )}
                      />
                    </Button>
                    <div
                      className={`${styles['dropdown-content']} ${
                        showLoginItems ? styles['show'] : ''
                      }`}
                    >
                      <button onClick={() => setIsLoginModalOpen(true)}>
                        Log in
                      </button>
                      <button onClick={() => setIsSignupModalOpen(true)}>
                        Sign Up
                      </button>
                    </div>
                  </Dropdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
