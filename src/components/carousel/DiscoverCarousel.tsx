import React, { FC } from 'react'
import { DiscoverCarouselContentProps } from '../../contents/store/discover/Store.Discover.Carousel'

interface IProps {
  ContentArray: DiscoverCarouselContentProps[]
}

/**
* @author
* @function @DiscoverCarousel
**/

export const DiscoverCarousel:FC<IProps> = (props) => {
  return (
    <div className='text-white'>DiscoverCarousel</div>
   )
 }
