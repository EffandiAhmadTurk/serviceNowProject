import styles from './ValueProps.module.scss';
import SectionTitle from '../../common/SectionTitle';
import {
  DonateHeart,
  PurchaseTagAlt,
  User,
  Bulb,
} from '@styled-icons/boxicons-solid';

const ValueProps = () => {
  return (
    <section className={styles['container']}>
      <div className={styles['wrapper']}>
        <SectionTitle
          isCenterAligned
          eyebrow="felix"
          title="If real estate and tech had a love child."
          titleClassName={styles['title']}
          eyebrowClassName={styles['eyebrow']}
        />
        <div className={styles['items-wrapper']}>
          <div className={styles['item']}>
            <div className={styles['icon-wrapper']}>
              <DonateHeart />
            </div>
            <label>Better service</label>
            <span>
              Our agents can spend more time on you if they’re not worried about
              finding their next lead.
            </span>
          </div>
          <div className={styles['item']}>
            <div className={styles['icon-wrapper']}>
              <PurchaseTagAlt />
            </div>
            <label>Lower fees</label>
            <span>
              It shouldn’t cost four months of your salary for one week of your
              agents work.
            </span>
          </div>

          <div className={styles['item']}>
            <div className={styles['icon-wrapper']}>
              <User />
            </div>
            <label>Smarter agents</label>
            <span>
              Our agents have seen it all! They know how to keep even the
              trickiest deals from falling through.
            </span>
          </div>
          <div className={styles['item']}>
            <div className={styles['icon-wrapper']}>
              <Bulb />
            </div>
            <label> Latest technology</label>
            <span>
              At felix, we’re a technology company first and a real estate
              brokerage second.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
