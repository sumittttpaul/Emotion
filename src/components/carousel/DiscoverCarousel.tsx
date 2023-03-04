import React, { FC, useRef, useState } from 'react';
import { DiscoverCarouselIProps } from '../../contents/store/discover/Store.Discover.Carousel';
import { useReduxSelector } from '../../redux/useReduxSelector';
import dynamic from 'next/dynamic';
import {
  DiscoverCarouselDesktopProps,
  DiscoverCarouselMobileProps,
} from './DiscoverCarousel/DiscoverCarousel.MultiScreen';

const DiscoverCarouselMobile = dynamic<DiscoverCarouselMobileProps>(() =>
  import('./DiscoverCarousel/DiscoverCarousel.MultiScreen').then(
    (x) => x.DiscoverCarouselMobile
  )
);

const DiscoverCarouselDesktop = dynamic<DiscoverCarouselDesktopProps>(() =>
  import('./DiscoverCarousel/DiscoverCarousel.MultiScreen').then(
    (x) => x.DiscoverCarouselDesktop
  )
);

interface IProps {
  ContentArray: DiscoverCarouselIProps[];
}

/**
 * @author
 * @function @DiscoverCarousel
 **/
export const DiscoverCarousel: FC<IProps> = (props) => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  const { isMobile } = useReduxSelector((state) => state.Device);

  if (isMobile)
    return <DiscoverCarouselMobile ContentArray={props.ContentArray} />;

  return (
    <DiscoverCarouselDesktop
      AutoPlay={true}
      Duration={5}
      ConstraintRef={ContainerRef}
      ThumbnailArray={props.ContentArray}
      CarouselState={CarouselState}
      setCarouselState={setCarouselState}
      setBannerTextTransition={setBannerTextTransition}
      ContentArray={props.ContentArray}
      ElementRef={ContainerRef}
      BannerTextTransition={BannerTextTransition}
    />
  );
};
