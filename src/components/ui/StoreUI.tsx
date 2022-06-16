import React, { FC, useState } from 'react';
import { MainHeader } from '../header/MainHeader/MainHeader';
import { CollectionsUI } from './StoreComponentUI/CollectionsUI';
import { DiscoverUI } from './StoreComponentUI/DiscoverUI';
import { OffersUI } from './StoreComponentUI/OffersUI';

interface IProps {}

/**
 * @Store_Discover
 **/
export const StoreUIDiscover: FC<IProps> = (props) => {
  const [Page, setPage] = useState('Discover');
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={Page} setPage={(value) => setPage(value)} />
      <DiscoverUI />
    </main>
  );
};

/**
 * @Store_Offers
 **/
export const StoreUIOffers: FC<IProps> = (props) => {
  const [Page, setPage] = useState('Offers');
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={Page} setPage={(value) => setPage(value)} />
      <OffersUI />
    </main>
  );
};

/**
 * @Store_Collections
 **/
export const StoreUICollections: FC<IProps> = (props) => {
  const [Page, setPage] = useState('Collections');
  return (
    <main className="w-full flex-grow z-auto">
      <MainHeader Page={Page} setPage={(value) => setPage(value)} />
      <CollectionsUI />
    </main>
  );
};
