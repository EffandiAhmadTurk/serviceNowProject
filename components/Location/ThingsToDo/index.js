import dynamic from 'next/dynamic';
import Section from '../common/Section';
import styles from './ThingsToDo.module.scss';
import ReactMarkdown from 'react-markdown';
import {
  Drink,
  Bank,
  ShoppingBag,
  Music,
  Heart,
  BeenHere,
} from '@styled-icons/boxicons-solid';
import { Dumbbell } from '@styled-icons/boxicons-regular';
import clsx from 'clsx';

const Map = dynamic(() => import('./Map'));

const Card = ({ icon, title, description, address }) => (
  <div className={styles['card']}>
    <div className={styles['col']}>
      <div className={clsx(styles['icon'], styles[icon.className])}>
        {icon.iconJsx}
      </div>

      <div className={styles['description']}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['text']}>{description}</p>
      </div>
    </div>
    <p className={styles['text']}>{address}</p>
  </div>
);

const iconSize = 22;

const getIcon = category => {
  switch (category) {
    case 'Museum':
      return { iconJsx: <Bank size={iconSize} />, className: 'green' };
    case 'Fitness':
      return { iconJsx: <Dumbbell size={iconSize} />, className: 'blue' };
    case 'Market':
      return { iconJsx: <ShoppingBag size={iconSize} />, className: 'yellow' };
    case 'Theater':
      return { iconJsx: <Music size={iconSize} />, className: 'purple' };
    case 'Art':
      return { iconJsx: <Heart size={iconSize} />, className: 'orange' };
    case 'Entertainment':
      return { iconJsx: <Drink size={iconSize} />, className: 'red' };
    default:
      return { iconJsx: <BeenHere size={iconSize} />, className: 'blue' };
  }
};

const ThingsToDo = ({
  locationLat,
  locationLng,
  locationName,
  locationThingsToDo,
  locationThingsToDoContent,
}) => {
  if (!locationThingsToDo.length && !locationThingsToDoContent) return null;

  const thingsToDoWIcons = locationThingsToDo.map(item => {
    return {
      ...item,
      icon: getIcon(item.category),
    };
  });

  return (
    <Section
      icon={<Drink size={32} />}
      heading={`Things to do around ${locationName}`}
    >
      <div className={styles['container']}>
        {locationThingsToDoContent && (
          <ReactMarkdown allowDangerousHtml className={styles['content']}>
            {locationThingsToDoContent}
          </ReactMarkdown>
        )}

        <div className={styles['map-container']}>
          <Map
            lat={locationLat}
            lng={locationLng}
            thingsToDo={thingsToDoWIcons}
          />
        </div>
        <div className={styles['card-container']}>
          {thingsToDoWIcons.map(({ id, name, ...rest }) => (
            <Card key={id} title={name} {...rest} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ThingsToDo;
