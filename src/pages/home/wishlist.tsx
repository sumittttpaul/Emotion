import { ReactElement } from 'react';
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
  return (
    <ParentLayout>
      <ChildLayout>{Wishlist}</ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Wishlist;
