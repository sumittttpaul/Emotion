import React, { FC } from 'react';
import { DiscoverCarousel } from '../../carousel/DiscoverCarousel';

interface IProps {}

const ThumbnailContent = [
  {
    Label: 'Thumbnail 1',
    URL: '/images/avatar/illustration/1.png',
  },
  {
    Label: 'Thumbnail 2',
    URL: '/images/avatar/illustration/2.png',
  },
  {
    Label: 'Thumbnail 3',
    URL: '/images/avatar/illustration/3.png',
  },
  {
    Label: 'Thumbnail 4',
    URL: '/images/avatar/illustration/4.png',
  },
  {
    Label: 'Thumbnail 5',
    URL: '/images/avatar/illustration/5.png',
  },
  {
    Label: 'Thumbnail 6',
    URL: '/images/avatar/illustration/6.png',
  },
  {
    Label: 'Thumbnail 7',
    URL: '/images/avatar/illustration/7.png',
  },
  {
    Label: 'Thumbnail 8',
    URL: '/images/avatar/illustration/8.png',
  },
  {
    Label: 'Thumbnail 9',
    URL: '/images/avatar/illustration/9.png',
  },
  {
    Label: 'Thumbnail 10',
    URL: '/images/avatar/illustration/10.png',
  },
];

/**
 * @author
 * @function @DiscoverUI
 **/

export const DiscoverUI: FC<IProps> = (props) => {
  return (
    <div className="relative z-10 px-5">
      {/* Content */}
      <DiscoverCarousel ThumbnailImageArray={ThumbnailContent} />
    </div>
  );
};
