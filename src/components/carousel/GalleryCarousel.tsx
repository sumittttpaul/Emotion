import React, { FC, useRef, useState } from 'react';
import { GalleryCarouselContentProps } from '../../contents/gallery/Gallery.Carousel';
import { useReduxSelector } from '../../redux/useReduxSelector';
import dynamic from 'next/dynamic';
import {
  GalleryCarouselDesktopProps,
  GalleryCarouselMobileProps,
} from './GalleryCarousel/GalleryCarousel.MultiScreen';

const GalleryCarouselMobile = dynamic<GalleryCarouselMobileProps>(() =>
  import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
    (x) => x.GalleryCarouselMobile
  )
);

const GalleryCarouselDesktop = dynamic<GalleryCarouselDesktopProps>(() =>
  import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
    (x) => x.GalleryCarouselDesktop
  )
);

interface IProps {
  ContentArray: GalleryCarouselContentProps[];
}

/**
 * @author
 * @function @GalleryCarousel
 **/
export const GalleryCarousel: FC<IProps> = (props) => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  const { isMobile } = useReduxSelector((state) => state.Device);

  if (isMobile)
    return <GalleryCarouselMobile ContentArray={props.ContentArray} />;

  return (
    <GalleryCarouselDesktop
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
