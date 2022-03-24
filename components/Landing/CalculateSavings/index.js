import { useState, useContext, useMemo } from 'react';
import Slider, { Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';
import currencyFormater from '../../../utils/currencyFormater';
import styles from './CalculateSavings.module.scss';
import SectionTitle from 'components/common/SectionTitle';
import {
  TriangleWithCircle,
  RectangleWithHalfCircle,
} from 'components/common/Patterns';

const HandleValue = props => {
  const { value, dragging, index, ...rest } = props;

  return (
    <Handle
      key={index}
      value={value}
      className={styles['handle']}
      {...rest}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          marginTop: '-32px',
          whiteSpace: 'nowrap',
          color: '#072967',
          fontSize: '18px',
          lineHeight: '120%',
        }}
      >
        ${currencyFormater.format(value)}
      </div>
    </Handle>
  );
};

const MIN_FELIX_PERCENT = 4000;
const SLIDER_MIN = 135000;
const SLIDER_MAX = 1200000;
const SLIDER_STEP = 1000;

const SELLER_SAVINGS = 0.01;
const BUYER_SAVINGS = 0.015;

const DEFAULT_VALUE = 500000;

const TACO_PRICE = 13;

const CalculateSavings = ({ type, action }) => {
  const savingsPercent = type === 'buy' ? BUYER_SAVINGS : SELLER_SAVINGS;

  const [inputRangeValue, inputRangeHandler] = useState(DEFAULT_VALUE);

  const { felixPercent, traditionalPercent, savings } = useMemo(() => {
    const felixPercent =
      Math.trunc(inputRangeValue * savingsPercent) < MIN_FELIX_PERCENT
        ? MIN_FELIX_PERCENT
        : Math.trunc(inputRangeValue * savingsPercent);
    const traditionalPercent = Math.trunc(inputRangeValue * 0.03);
    const savings = Math.trunc(traditionalPercent - felixPercent);
    return { felixPercent, traditionalPercent, savings };
  }, [inputRangeValue, savingsPercent]);

  const onChangeRange = value => {
    inputRangeHandler(value);
  };

  return (
    <section className={styles['container']}>
      <div className={styles['wrapper']}>
        {type === 'buy' ? (
          <div className={styles['pattern']}>
            <TriangleWithCircle
              primaryColor="red"
              secondaryColor="blue"
              rotateDirection="right"
            />
          </div>
        ) : (
          <div className={styles['pattern']}>
            <RectangleWithHalfCircle
              primaryColor="yellow"
              secondaryColor="red"
              rotateDirection="left"
            />
          </div>
        )}

        <SectionTitle eyebrow="Calculate your savings" isCenterAligned>
          Your savings when you {type}:&nbsp;
          <span className={styles['amount']}>
            ${currencyFormater.format(savings)}
          </span>
          <span className={styles['alt-savings']}>
            or&nbsp;
            <span>
              {currencyFormater.format((savings / TACO_PRICE) >> 0)}
            </span>{' '}
            hot chicken sandwiches 🔥🐔🥪
          </span>
        </SectionTitle>
        <div id="calc-savings-slider" className={styles['input-range-wrapper']}>
          <Slider
            step={SLIDER_STEP}
            max={SLIDER_MAX}
            min={SLIDER_MIN}
            value={inputRangeValue}
            onChange={value => onChangeRange(value)}
            handle={HandleValue}
          />

          <div className={styles['commissions-wrapper']}>
            <div className={styles['commission']}>
              <div>${currencyFormater.format(felixPercent)}</div>
              <span>*felix {type === 'sell' ? 1 : 1.5}% Commission</span>
            </div>
            <div className={styles['commission']}>
              <div>${currencyFormater.format(traditionalPercent)}</div>
              <span>Traditional 3% Commission</span>
            </div>
          </div>
        </div>
        <div className={styles['action']}>
          {action}
          <p>*A minimum commission of $4,000 applies</p>
        </div>
      </div>
      <div className={styles['mobile-note']}>
        {type === 'buy' ? 'Buyers' : 'Sellers'} save $8,100 on average.
      </div>
    </section>
  );
};

export default CalculateSavings;
