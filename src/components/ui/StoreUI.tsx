import React, { FC } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { CollectionsUI } from './StoreComponentUI/CollectionsUI';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';
import { OffersUI } from './StoreComponentUI/OffersUI';

interface IPropsCollections {}

interface IPropsDiscover {}

interface IPropsOffers {}

/**
 * @Store_UI_Discover
 **/
export const StoreUIDiscover: FC<IPropsDiscover> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader />
      <DiscoverUI />
    </main>
  );
};

/**
 * @Store_UI_Offers
 **/
export const StoreUIOffers: FC<IPropsOffers> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader />
      <OffersUI />
    </main>
  );
};

/**
 * @Store_UI_Collections
 **/
export const StoreUICollections: FC<IPropsCollections> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader />
      <CollectionsUI />
    </main>
  );
};
