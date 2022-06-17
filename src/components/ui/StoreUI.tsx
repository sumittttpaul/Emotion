import React, { FC } from 'react';
import { CollectionsUI } from './StoreComponentUI/CollectionsUI';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';
import { OffersUI } from './StoreComponentUI/OffersUI';

interface IProps {}

/**
 * @Store_Discover
 **/
export const StoreUIDiscover: FC<IProps> = (props) => {
  return <DiscoverUI />;
};

/**
 * @Store_Offers
 **/
export const StoreUIOffers: FC<IProps> = (props) => {
  return <OffersUI />;
};

/**
 * @Store_Collections
 **/
export const StoreUICollections: FC<IProps> = (props) => {
  return <CollectionsUI />;
};
