import SectionTitle from 'components/common/SectionTitle';
import styles from './Press.module.scss';

const PressBlock = ({ title, text, children, href }) => (
  <a
    className={styles['press-block']}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <h3>{title}</h3>
    <h2>{children}</h2>
    <p>{text}</p>
  </a>
);

const Press = () => {
  return (
    <section className={styles['container']}>
      <SectionTitle
        title="People are taking notice."
        eyebrow="IN THE PRESS"
        isCenterAligned
      />
      <div className={styles['wrapper']}>
        <PressBlock
          title="JUNE 14, 2019"
          text="WKRN: Channel 2 News"
          href={
            'https://www.wkrn.com/community/take-2/take-2-ceo-talks-felix-flat-fee-designed-specifically-for-homeowners/'
          }
        >
          Sell Your House the Smart Way with Felix Homes
        </PressBlock>
        <PressBlock
          title="MAY 26, 2019"
          text="Inman"
          href={
            'https://www.inman.com/2019/05/26/felix-homes-offers-free-listing-service-for-military-veterans/'
          }
        >
          Felix Homes offers free listing service for military, veterans
        </PressBlock>
        <PressBlock
          title="MAY 23, 2019"
          text="Inman"
          href={
            'https://www.inman.com/2019/05/24/felix-homes-starts-flat-fee-service/'
          }
        >
          Felix Homes starts flat-fee service
        </PressBlock>
        <PressBlock title="MAY 16, 2019" text="The Tennessean">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://www.tennessean.com/story/sponsor-story/felix-homes/2019/05/16/you-making-6-real-estate-commission-mistake/3685754002/'
            }
          >
            Are you making the 6% real estate commission mistake?
          </a>
        </PressBlock>
        <PressBlock
          title="JULY 13, 2018"
          text="WKRN: Channel 2 News"
          href={
            'https://www.wkrn.com/news/nashville-2019/new-real-estate-company-promises-to-sell-home-within-90-days-or-theyll-buy-it/'
          }
        >
          New real estate company promises to sell home within 90 days, or
          <br /> they’ll buy it
        </PressBlock>
        <PressBlock
          title="JUNE 26, 2018"
          text="The Tennessean"
          href={
            'https://www.tennessean.com/story/money/2018/06/26/nashville-tn-homes-real-estate-housing-condos-duplexes-felix/731980002/'
          }
        >
          This company will pay you to list your Nashville home — and then buy
          <br /> it if the offers don't come
        </PressBlock>
        <PressBlock
          title="JUNE 26, 2018"
          text="News Channel 5"
          href={
            'https://www.newschannel5.com/news/company-takes-new-approach-to-selling-homes'
          }
        >
          Company Takes New Approach To Selling Homes
        </PressBlock>
        <PressBlock
          title="JULY 5, 2018"
          text="Inman"
          href={
            'https://www.inman.com/2018/07/05/a-new-startup-will-try-to-sell-your-home-at-the-highest-price-for-90-days-and-then-go-full-ibuyer/'
          }
        >
          A new startup will try to sell your home at the highest price for 90
          <br /> days — and then go full iBuyer
        </PressBlock>
      </div>
    </section>
  );
};

export default Press;
