import React, { FC, useState } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { CollectionsUI } from './StoreComponentUI/CollectionsUI';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';
import { OffersUI } from './StoreComponentUI/OffersUI';

interface IProps {
  Page: string;
  setPage: (value: string) => void;
}

/**
 * @Store_Discover
 **/
export const StoreUIDiscover: FC<IProps> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={props.Page} setPage={props.setPage} />
      <DiscoverUI />
    </main>
  );
};

/**
 * @Store_Offers
 **/
export const StoreUIOffers: FC<IProps> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={props.Page} setPage={props.setPage} />
      <OffersUI />
    </main>
  );
};

/**
 * @Store_Collections
 **/
export const StoreUICollections: FC<IProps> = (props) => {
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={props.Page} setPage={props.setPage} />
      <CollectionsUI />
    </main>
  );
};
