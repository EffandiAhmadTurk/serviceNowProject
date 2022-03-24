import { Tabs, Tab, makeStyles } from '@material-ui/core';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import isElementXPercentInViewport from 'utils/isElementXPercentInViewport';
import getOffset from 'utils/getOffset';
import { NAVIGATION_HEIGHT } from 'utils/constants';

const sectionItems = [
  {
    label: 'About',
    sectionId: 'location-about',
    percentVisible: 20,
  },
  {
    label: 'Schools',
    sectionId: 'location-schools',
    percentVisible: 40,
  },
  {
    label: 'Stats',
    sectionId: 'location-stats',
    percentVisible: 40,
  },
  {
    label: 'Reviews',
    sectionId: 'location-reviews',
    percentVisible: 50,
  },
  {
    label: 'FAQs',
    sectionId: 'location-faqs',
    percentVisible: 60,
  },
];

const useStyles = makeStyles(theme => ({
  tabs: {
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
    '& span:nth-child(2)': {
      background: theme.palette.blue_100,
      height: '3px',
    },
  },
  tab: {
    textTransform: 'none',
    fontWeight: 200,
    fontSize: theme.text.m,
    color: theme.palette.black_60,
    letterSpacing: 0,
    "&[aria-selected='true']": {
      color: theme.palette.blue_100,
    },
  },
}));

const Navigation = () => {
  const [value, setValue] = useState(0);
  const [isHidden, setIsNavigationHidden] = useState(false);
  const [sections, setSections] = useState(null);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const domElement = sections[newValue].domElement;
    const { top } = getOffset(domElement);

    if (top) {
      const viewportOffset = domElement.getBoundingClientRect().top;

      const pageNavigationHeight = 80;

      // Offset is needed depending on scroll direction
      // If viewportOffset is negative that means we're scrolling down and need a offset
      const offset = viewportOffset < 0 ? pageNavigationHeight : 0;

      const clearedTop = top - NAVIGATION_HEIGHT - offset;
      window.scrollTo(0, clearedTop);
    }
  };

  useEffect(() => {
    const sections = sectionItems.map(sec => ({
      domElement: document.getElementById(sec.sectionId),
      percentVisible: sec.percentVisible,
    }));
    setSections(sections);

    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      const directionBool = this.oldScroll > this.scrollY;
      if (directionBool) {
        setIsNavigationHidden(false);
      } else {
        setIsNavigationHidden(true);
      }
      // Detect which element is in the viewport and set the navbar accordingly
      sections.forEach(({ domElement, percentVisible }, idx) => {
        const isElementVisible = isElementXPercentInViewport(
          domElement,
          percentVisible
        );
        if (isElementVisible) {
          setValue(idx);
        }
      });

      this.oldScroll = this.scrollY;
    };
    return () => {
      console.log('clean up');
    };
  }, []);

  return (
    <section
      className={clsx(styles['container'], isHidden && styles['is-hidden'])}
    >
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        scrollButtons="on"
        variant="scrollable"
      >
        {sectionItems.map(({ sectionId, label }) => (
          <Tab key={sectionId} className={classes.tab} label={label} />
        ))}
      </Tabs>
    </section>
  );
};

export default Navigation;
