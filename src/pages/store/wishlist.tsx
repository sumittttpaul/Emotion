import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { WishlistUIProps } from '../../components/ui/StoreComponentUI/WishlistUI';
import dynamic from 'next/dynamic';

const WishlistUI = dynamic<WishlistUIProps>(
  () =>
    import('../../components/ui/StoreComponentUI/WishlistUI').then(
      (x) => x.WishlistUI
    ),
  {
    loading: () => (
      <h6 className="text-white p-5 w-full text-center">Loading . . . </h6>
    ),
    ssr: false,
  }
);

/**
 * @Wishlist_Page
 **/
export default function Wishlist() {
  return <WishlistUI />;
}

Wishlist.getLayout = function GetLayout(Wishlist: ReactElement) {
  const [ChildPage, setChildPage] = useState('Wishlist');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Wishlist}
      </PageChildLayout>
    </PageParentLayout>
  );
};
