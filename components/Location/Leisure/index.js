import { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import Section from '../common/Section';
import { Pizza } from '@styled-icons/boxicons-solid';
import styles from './Leisure.module.scss';
import Card from './Card';
import ReactMarkdown from 'react-markdown';

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <div className={styles['tab-panel']}>{children}</div>}
  </div>
);

const Leisure = ({ locationLeisures, locationLeisureContent }) => {
  const [tab, setTab] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  const restaurants = locationLeisures.filter(
    leisure => leisure.category === 'Restaurant'
  );
  const nightLifes = locationLeisures.filter(
    leisure => leisure.category === 'Nightlife'
  );
  const cafes = locationLeisures.filter(cafe => cafe.category === 'Cafe');

  const hasRestaurants = restaurants.length > 0;
  const hasNighLife = nightLifes.length > 0;
  const hasCafes = cafes.length > 0;

  const hasLeisure = hasRestaurants || hasNighLife || hasCafes;

  if (!hasLeisure) {
    return null;
  }

  return (
    <Section
      heading="Where to eat, hang out and have a good time"
      icon={<Pizza size={32} />}
    >
      <div className={styles['container']}>
        {locationLeisureContent && (
          <ReactMarkdown allowDangerousHtml className={styles['text']}>
            {locationLeisureContent}
          </ReactMarkdown>
        )}

        {hasLeisure ? (
          <div className={styles['favorites-wrapper']}>
            <h3 className={styles['title']}>Local Favorites</h3>
            <div className={styles['tabs']}>
              <Tabs
                value={tab}
                onChange={handleChangeTabs}
                indicatorColor="secondary"
              >
                <Tab label="Restaurants" />
                <Tab label="Nightlife" />
                <Tab label="Cafes" />
              </Tabs>
            </div>

            <TabPanel value={tab} index={0}>
              {restaurants.map(restaurant => (
                <Card key={restaurant.id} {...restaurant} />
              ))}
            </TabPanel>
            <TabPanel value={tab} index={1}>
              {nightLifes.map(nightLife => (
                <Card key={nightLife.id} {...nightLife} />
              ))}
            </TabPanel>
            <TabPanel value={tab} index={2}>
              {cafes.map(cafe => (
                <Card key={cafe.id} {...cafe} />
              ))}
            </TabPanel>
          </div>
        ) : null}
      </div>
    </Section>
  );
};
export default Leisure;
