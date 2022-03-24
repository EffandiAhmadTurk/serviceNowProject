import Testimonial from './Testimonial';
import testimonials from './testimonials';
import useWindowWidth from '../../../utils/useWindowWidth';
import SectionTitle from '../../common/SectionTitle';
import { MOBILE_BREAKPOINT } from '../../../utils/constants';
import styles from './Testimonials.module.scss';
import DefaultButton from 'components/common/DefaultButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Background from 'components/common/Background';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Spacer from 'components/common/Spacer';
import { HalfCircleWithCircle } from 'components/common/Patterns';

const Testimonials = () => {
  const width = useWindowWidth();

  SwiperCore.use([Navigation, Pagination]);

  return (
    <section className={styles['container']}>
      <Background />
      <Spacer p="l" />
      <div className={styles['pattern']}>
        <HalfCircleWithCircle
          primaryColor="yellow"
          secondaryColor="red"
          rotateDirection="right"
        />
      </div>
      <div className={styles['wrapper']}>
        <SectionTitle whiteTitle eyebrow="felix reviews" isCenterAligned>
          Our clients are our <nobr>biggest fans.</nobr>
        </SectionTitle>

        <div className={styles['slider-wrapper']}>
          <Swiper
            modules={[Navigation, Pagination]}
            loop
            navigation
            centeredSlides={true}
            pagination={{ clickable: true }}
            spaceBetween={width > MOBILE_BREAKPOINT ? 36 : 20}
            slidesPerView={'auto'}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={styles['slide-wrapper']}>
                  <Testimonial {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles['cards-wrapper']}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Testimonial {...testimonial} key={index} />
          ))}
        </div>
        <div className={styles['actions']}>
          <DefaultButton
            link="/reviews"
            label="See 70+ Reviews"
            variant="secondary-white"
          />
        </div>
      </div>
      <Spacer p="xl" />
    </section>
  );
};

export default Testimonials;
