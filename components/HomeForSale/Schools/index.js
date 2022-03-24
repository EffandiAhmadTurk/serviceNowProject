import Section from '../common/Section';
import List from '../common/List';
import ListItem from '../common/ListItem';
import styles from './Schools.module.scss';

const Schools = ({ street, schools, mlsId }) => {
  const { elementary, middle, high } = schools;

  const listItems = [
    { label: 'Elementary School', value: elementary },
    { label: 'Middle School', value: middle },
    { label: 'High School', value: high },
  ];
  return (
    <Section heading={`Schools near ${street}`} id={`${mlsId}-schools`}>
      <div className={styles['wrapper']}>
        <List fullWidth>
          {listItems.map(({ label, value }) => (
            <ListItem key={label} label={label} value={value} />
          ))}
        </List>
      </div>
    </Section>
  );
};

export default Schools;
