import { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import useWindowWidth from 'utils/useWindowWidth';
import { TABLET_BREAKPOINT } from 'utils/constants';
import Section from '../common/Section';
import Loader from 'components/common/Loader';
import styles from './SchoolInfo.module.scss';
import SchoolItem from './SchoolItem';
import { Graduation } from '@styled-icons/boxicons-solid';

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>{value === index && <div>{children}</div>}</div>
);

const getSchools = async ({ lat, lng }) => {
  const { data: schools } = await axios.get('/api/schools', {
    params: {
      lat,
      lng,
    },
    headers: {
      'Cache-Control': 's-maxage=86400',
    },
  });
  return schools;
};

const Error = () => (
  <div className={styles['error']}>
    <h3>Check back later</h3>
    <p>Unable to get school information at the moment</p>
  </div>
);

const Schools = ({
  locationLat,
  locationLng,
  locationName,
  locationSchoolsContent,
}) => {
  const [tab, setTab] = useState(0);
  const [schools, setSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const width = useWindowWidth();

  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const schools = await getSchools({
          lat: locationLat,
          lng: locationLng,
        });
        setSchools(schools);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section className={styles['container']}>
      <Section
        heading={`${locationName} School Info`}
        icon={<Graduation size={32} />}
      >
        <div className={styles['content']}>
          {locationSchoolsContent && (
            <ReactMarkdown className={styles['text']}>
              {locationSchoolsContent}
            </ReactMarkdown>
          )}

          <div className={styles['table']}>
            <div className={styles['tabs']}>
              <Tabs
                value={tab}
                onChange={handleChangeTabs}
                indicatorColor="secondary"
              >
                <Tab
                  label={
                    width <= TABLET_BREAKPOINT
                      ? 'Elementary'
                      : 'Elementary Schools'
                  }
                />
                <Tab
                  label={
                    width <= TABLET_BREAKPOINT ? 'Middle' : 'Middle Schools'
                  }
                />
                <Tab
                  label={width <= TABLET_BREAKPOINT ? 'High' : 'High Schools'}
                />
              </Tabs>
            </div>

            {isLoading && <Loader />}

            {error && <Error />}

            {!isLoading && (
              <>
                <TabPanel value={tab} index={0}>
                  {schools.map(
                    school =>
                      school.elementary && (
                        <SchoolItem key={school.name} school={school} />
                      )
                  )}
                </TabPanel>
                <TabPanel value={tab} index={1}>
                  {schools.map(
                    school =>
                      school.middle && (
                        <SchoolItem key={school.name} school={school} />
                      )
                  )}
                </TabPanel>
                <TabPanel value={tab} index={2}>
                  {schools.map(
                    school =>
                      school.high && (
                        <SchoolItem key={school.name} school={school} />
                      )
                  )}
                </TabPanel>
              </>
            )}
          </div>
          <div className={styles['great-schools']}>
            <img
              src="/images/great_schools_logo.png"
              alt="great_schools_logo"
            />
          </div>
        </div>
      </Section>
    </section>
  );
};
export default Schools;
