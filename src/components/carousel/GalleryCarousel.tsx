import { useRef, useState } from 'react';
import { GalleryCarouselContentProps } from '../../contents/gallery/Gallery.Carousel';
import dynamic from 'next/dynamic';
import {
  GalleryCarouselDesktopProps,
  GalleryCarouselMobileProps,
} from './GalleryCarousel/GalleryCarousel.MultiScreen';
import { DeviceHook } from 'hooks/global/Hooks.Device';

const GalleryCarouselMobile = dynamic<GalleryCarouselMobileProps>(
  () =>
    import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
      (x) => x.GalleryCarouselMobile,
    ),
  { ssr: false },
);

const GalleryCarouselDesktop = dynamic<GalleryCarouselDesktopProps>(
  () =>
    import('./GalleryCarousel/GalleryCarousel.MultiScreen').then(
      (x) => x.GalleryCarouselDesktop,
    ),
  { ssr: false },
);

interface IProps {
  ContentArray: GalleryCarouselContentProps[];
}

function GalleryCarousel(props: IProps) {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [CarouselState, setCarouselState] = useState(0);
  const [BannerTextTransition, setBannerTextTransition] = useState('open');
  const { isMobile } = DeviceHook();

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
}

export default GalleryCarousel;
