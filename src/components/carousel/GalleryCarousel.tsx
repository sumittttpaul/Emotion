import React, { FC, useRef, useState } from 'react';
import { GalleryCarouselContentProps } from '../../contents/gallery/Gallery.Carousel';
import dynamic from 'next/dynamic';
import {
  GalleryCarouselDesktopProps,
  GalleryCarouselMobileProps,
} from './GalleryCarousel/GalleryCarousel.MultiScreen';
import { useReduxStore } from '../../redux/useReduxStore';

const GalleryCarouselMobile = dynamic<GalleryCarouselMobileProps>(
  () =>
    import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
      (x) => x.GalleryCarouselMobile
    ),
  { ssr: false }
);

const GalleryCarouselDesktop = dynamic<GalleryCarouselDesktopProps>(
  () =>
    import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
      (x) => x.GalleryCarouselDesktop
    ),
  { ssr: false }
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
  const { isMobile } = useReduxStore((state) => state.Device);

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
