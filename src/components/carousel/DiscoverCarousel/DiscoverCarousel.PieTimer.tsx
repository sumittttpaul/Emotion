import React, { FC, useEffect, useState } from 'react';
import styles from './../../../styles/modules/pietimer.module.css';

interface IProps {}

/**
 * @author
 * @function @DiscoverCarouselPieTimer
 **/

export const DiscoverCarouselPieTimer: FC<IProps> = (props) => {
  const [Hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 10 * 1000 - 250);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!Hide && (
        <div className="relative">
          <div className={styles.discover_carousel_timer_wrapper}>
            <div
              className={`${styles.discover_carousel_timer_pie} ${styles.discover_carousel_timer_spinner_mask}`}
            >
              <div
                className={`${styles.discover_carousel_timer_pie} ${styles.discover_carousel_timer_spinner}`}
              />
            </div>
            <div
              className={`${styles.discover_carousel_timer_pie} ${styles.discover_carousel_timer_filler}`}
            />
            <div className={styles.discover_carousel_timer_mask} />
          </div>
        </div>
      )}
    </>
  );
};
