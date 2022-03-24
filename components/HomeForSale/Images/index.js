import { useState, forwardRef } from 'react';
import Image from 'next/image';
import getSatelliteImage from 'utils/getSatelliteImage';
import styles from './Images.module.scss';
import clsx from 'clsx';
import { Dialog, Slide } from '@material-ui/core';
import { X, GridAlt, Map as MapIcon } from '@styled-icons/boxicons-regular';
import Section from '../common/Section';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DesktopImages = ({ lat, lng, images = [] }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleModal = () => {
    setIsImageModalOpen(!isImageModalOpen);
  };

  const handleMap = isOpen => {
    setIsMapOpen(isOpen);
  };

  const hasNoImages = images.length === 0;
  let hasOneImage = images.length === 1;

  let featuredImage = `${images[0]}?width=600&height=500`;
  const gridImages = images.slice(1, 5);

  if (hasNoImages) {
    featuredImage = getSatelliteImage(lat, lng, '800x400');
    hasOneImage = true;
  }

  return (
    <div
      className={clsx(
        styles['desktop-container'],
        hasOneImage && styles['one-image'],
        isMapOpen && styles['map-view']
      )}
    >
      {isMapOpen && (
        <>
          <Map lat={lat} lng={lng} />

          <div className={styles['actions']}>
            <button
              onClick={() => handleMap(false)}
              className={styles['show-all-button']}
            >
              <GridAlt size="22" />
              View Photos
            </button>
          </div>
        </>
      )}
      {!isMapOpen && (
        <>
          <Image
            width="100%"
            height="100%"
            placeholder="blurr"
            src={featuredImage}
            unoptimized
            className={styles['featured-image']}
            onClick={handleModal}
          />
          <div className={styles['child-grid']}>
            {gridImages.map(image => (
              <Image
                key={image}
                onClick={handleModal}
                src={`${image}?width=400&height=300`}
                width="100%"
                height="100%"
                unoptimized
              />
            ))}
          </div>

          {!hasNoImages && (
            <Dialog
              className={styles['modal-container']}
              open={isImageModalOpen}
              onClose={handleModal}
              TransitionComponent={Transition}
              keepMounted
              maxWidth="lg"
              BackdropProps={{
                className: styles['backdrop'],
              }}
            >
              <X
                size={60}
                className={styles['close-icon']}
                onClick={handleModal}
              />

              {images.map(image => (
                <img
                  key={image}
                  onClick={handleModal}
                  src={`${image}?width=850&height=600`}
                />
              ))}
            </Dialog>
          )}

          <div className={styles['actions']}>
            <button
              onClick={() => handleMap(true)}
              className={styles['show-all-button']}
            >
              <MapIcon size="22" />
              View on Map
            </button>
            {!hasOneImage ? (
              <button
                onClick={handleModal}
                className={styles['show-all-button']}
              >
                <GridAlt size="22" />
                View all Photos
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

const MobileImages = ({ mlsId, images = [], lat, lng }) => {
  return (
    <div className={styles['mobile-container']}>
      <Section heading="Map" id={`${mlsId}-map`}>
        <Map lat={lat} lng={lng} />
      </Section>
      <Section heading="Photos" id={`${mlsId}-images`}>
        {images.map(image => (
          <img key={image} src={`${image}?width=600&height=400`} />
        ))}
      </Section>
    </div>
  );
};

const Images = ({ isTablet, ...props }) => {
  if (isTablet) {
    return <MobileImages {...props} />;
  } else {
    return <DesktopImages {...props} />;
  }
};

export default Images;
