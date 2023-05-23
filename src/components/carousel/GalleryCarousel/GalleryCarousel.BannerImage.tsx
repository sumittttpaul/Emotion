import React, { Component } from 'react';
import Image from 'next/legacy/image';

interface IProps {
  src: string;
  alt: string;
  style?: object;
  className?: string;
  objectPosition?: string;
}

/**
 * @Carousel_Banner_Image
 **/
export class GalleryCarouselBannerImage extends Component<IProps> {
  state = {
    topSrc: this.props.src,
    bottomOpacity: 0,
    bottomSrc: this.props.src,
  };

  timeout: ReturnType<typeof setInterval> | undefined;

  UNSAFE_componentWillReceiveProps(newProps: IProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      this.setState({ bottomSrc: false, topSrc: false }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
          () => {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
              () => this.setState({ bottomOpacity: 0 }),
              20
            );
          }
        )
      );
    }
  }
  render() {
    const { style, alt, objectPosition, className } = this.props;
    const { topSrc, bottomOpacity, bottomSrc } = this.state;
    return (
      <>
        {topSrc && (
          <Image
            objectFit="cover"
            objectPosition={objectPosition}
            priority
            layout="fill"
            className={className}
            style={{ ...style }}
            src={topSrc}
            alt={alt}
          />
        )}
        {bottomSrc && (
          <Image
            objectFit="cover"
            objectPosition="center"
            priority
            layout="fill"
            className={className}
            alt={alt}
            style={{
              ...style,
              ...{
                opacity: bottomOpacity,
                transition: `opacity ${500 / 1000}s ${'ease'} ${0 / 1000}s`,
              },
            }}
            src={bottomSrc}
          />
        )}
      </>
    );
  }
}
