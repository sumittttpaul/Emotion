import { ReactElement, useState } from 'react';
import { ParentLayout } from '../../components/layout/ParentLayout';
import { ChildLayout } from '../../components/layout/ChildLayout';
import { WishlistUI } from '../../components/ui/WishlistUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Wishlist_Page
 **/
function Wishlist() {
  return <WishlistUI />;
}

Wishlist.getLayout = function GetLayout(Wishlist: ReactElement) {
  const [ChildPage, setChildPage] = useState('Wishlist');
  return (
    <ParentLayout setChildPage={(value) => setChildPage(value)}>
      <ChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Wishlist}
      </ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Wishlist;
