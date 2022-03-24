import styles from './Content.module.scss';
import clsx from 'clsx';
import BookATourCta from './BookATourCta';
import SetUpFeedCta from './SetUpFeedCta';
import { SignupCta, RelatedArticles } from './BlogCta';
import useDevices from 'utils/useDevices';

const CtaWrapper = ({ children }) => {
  return (
    <div className={styles['cta-wrapper']}>
      <div className={styles['cta']}>{children}</div>
    </div>
  );
};

const getCta = ({ cta, isDesktop, ctaValues }) => {
  switch (cta) {
    case 'blog':
      return (
        <CtaWrapper>
          <SignupCta isDesktop={isDesktop} />
        </CtaWrapper>
      );
    case 'feed':
      return (
        <CtaWrapper>
          <SetUpFeedCta isDesktop={isDesktop} {...ctaValues} />
        </CtaWrapper>
      );
    case 'tour':
      return (
        <CtaWrapper>
          <BookATourCta isDesktop={isDesktop} {...ctaValues} />
        </CtaWrapper>
      );
    case 'related-articles':
      return (
        <CtaWrapper>
          <RelatedArticles isDesktop={isDesktop} {...ctaValues} />
        </CtaWrapper>
      );
    default:
      return (
        <CtaWrapper>
          <SignupCta isDesktop={isDesktop} />
        </CtaWrapper>
      );
  }
};

const Content = ({
  children,
  ctaValues,
  withContainer,

  // new
  rightCta,
  leftCta,
}) => {
  const { isDesktop } = useDevices();

  return (
    <div
      className={clsx(
        styles['container'],
        rightCta && !leftCta && styles['with-right-cta'],
        leftCta && !rightCta && styles['with-left-cta'],
        rightCta && leftCta && styles['with-dual-cta'],
        withContainer && styles['with-container']
      )}
    >
      {leftCta && getCta({ cta: leftCta, isDesktop, ctaValues })}

      <div className={styles['content']}>{children}</div>

      {rightCta && getCta({ cta: rightCta, isDesktop, ctaValues })}
    </div>
  );
};

export default Content;
