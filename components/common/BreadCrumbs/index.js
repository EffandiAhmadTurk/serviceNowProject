import { ArrowForwardIos } from '@material-ui/icons';
import { CaretRight } from '@styled-icons/boxicons-regular';
import styles from './BreadCrumbs.module.scss';
import Link from 'next/link';

const createCountySchema = (path, name) => {
  return {
    '@type': 'ListItem',
    position: 2,
    item: {
      '@type': 'AdministrativeArea',
      '@id': `https://www.felixhomes.com${path}`,
      name: name,
      description: 'A County with homes for sale',
    },
  };
};

const createCitySchema = (path, name, position) => {
  return {
    '@type': 'ListItem',
    position: 3,
    item: {
      '@type': 'City',
      '@id': `https://www.felixhomes.com${path}#${name}`,
      name: name,
      description: 'A City with homes for sale',
    },
  };
};

const BreadCrumbs = ({
  city,
  county,
  currentCrumb,
  className,
  type,
  locationPath,
  locationName,
}) => {
  let itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Organization',
        '@id': `https://www.felixhomes.com${locationPath}/breadcrumb-list`,
        name: 'felix',
        description: 'The home page',
      },
    },
  ];

  if (type === 'County') {
    const schema = createCountySchema(locationPath, locationName);
    itemListElement.push(schema);
  }

  if (type === 'Neighborhood') {
    const countySchema = createCountySchema(county.path, county.name);
    itemListElement.push(countySchema);

    const citySchema = createCitySchema(city.path, city.name);
    itemListElement.push(citySchema);

    itemListElement.push({
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'AdministrativeArea',
        '@id': `https://www.felixhomes.com${locationPath}`,
        name: locationName,
        description: 'A Neighborhod with homes for sale',
      },
    });
  }
  if (type === 'City') {
    const countySchema = createCountySchema(county.path, county.name);
    itemListElement.push(countySchema);

    const citySchema = createCitySchema(locationPath, locationName);
    itemListElement.push(citySchema);
  }

  if (type === 'Zip Code') {
    const countySchema = createCountySchema(county.path, county.name);
    itemListElement.push(countySchema);
    itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'AdministrativeArea',
        '@id': `https://www.felixhomes.com${locationPath}`,
        name: locationName,
        description: `A Zip Code with homes for sale`,
      },
    });
  }

  const schema = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  let cityJsx = null;
  if (city) {
    cityJsx = (
      <>
        <CaretRight size={16} />
        <li>
          <Link href={city.path}>{city.name}</Link>
        </li>
      </>
    );
  }
  let countyJsx = null;
  if (county) {
    cityJsx = (
      <>
        <CaretRight size={16} />
        <li>
          <Link href={county.path}>{county.name}</Link>
        </li>
      </>
    );
  }

  return (
    <div className={styles['container']}>
      <nav aria-label="Breadcrumbs">
        <ul className={`${styles['breadcrumbs']} ${className}`}>
          <li>
            <Link href="/">felix</Link>
          </li>
          {countyJsx}
          {cityJsx}
          <CaretRight size={16} />
          <li>{currentCrumb}</li>
        </ul>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default BreadCrumbs;
