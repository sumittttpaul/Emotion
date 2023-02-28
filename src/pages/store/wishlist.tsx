import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { WishlistUI } from '../../components/ui/WishlistUI';

/**
 * @Wishlist_Page
 **/
function Wishlist() {
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

export default Wishlist;
