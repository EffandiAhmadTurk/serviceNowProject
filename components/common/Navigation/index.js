import Link from 'next/link';
import { useState, useMemo } from 'react';
import Drawer from './Drawer';
import Bar from './Bar';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useWindowWidth from 'utils/useWindowWidth';
import { TABLET_BREAKPOINT } from 'utils/constants';

const Navigation = ({ isTransparent = true, variant = 'landing' }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuOpenHandler = () => setOpenMobileMenu(!openMobileMenu);

  const width = useWindowWidth();

  const scrolled = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
    disableHysteresis: true,
    threshold: 10,
  });

  const isContentBlack = useMemo(
    () => !isTransparent || scrolled,
    [isTransparent, scrolled]
  );

  return (
    <header className={styles['container']}>
      <Slide appear={false} direction="down" in={scrolled || !isTransparent}>
        <div
          className={clsx(
            styles['bg-overlay'],
            !isTransparent && styles['bg-white']
          )}
        />
      </Slide>
      <div className={clsx(styles['wrapper'], styles[variant])}>
        <Link href="/">
          <a
            className={clsx(
              styles['logo-wrapper'],
              isContentBlack && styles['black']
            )}
          >
            <img
              src="/images/logo_white.svg"
              alt="Logo"
              className={clsx(styles['logo-white'])}
            />
            <img
              src="/images/logo_black.svg"
              alt="Logo black"
              className={clsx(styles['logo-black'])}
            />
          </a>
        </Link>
        <Bar
          mobileMenuOpenHandler={mobileMenuOpenHandler}
          variant={variant}
          isBlack={isContentBlack}
        />
        {width <= TABLET_BREAKPOINT && (
          <Drawer
            open={openMobileMenu}
            handleMenuClose={mobileMenuOpenHandler}
            setOpenMobileMenu={setOpenMobileMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Navigation;
