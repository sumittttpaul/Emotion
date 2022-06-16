import React, { FC, useState } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { CollectionsUI } from './StoreComponentUI/CollectionsUI';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';
import { OffersUI } from './StoreComponentUI/OffersUI';

interface IPropsCollections {}

interface IPropsDiscover {}

interface IPropsOffers {}

// const [state, setstate] = useState<string>('Discover');

/**
 * @Store_Discover
 **/
export const StoreUIDiscover: FC<IPropsDiscover> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader CurrentPage="Discover" />
      <DiscoverUI />
    </main>
  );
};

/**
 * @Store_Offers
 **/
export const StoreUIOffers: FC<IPropsOffers> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader CurrentPage="Offers" />
      <OffersUI />
    </main>
  );
};

/**
 * @Store_Collections
 **/
export const StoreUICollections: FC<IPropsCollections> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader CurrentPage="Collections" />
      <CollectionsUI />
    </main>
  );
};
