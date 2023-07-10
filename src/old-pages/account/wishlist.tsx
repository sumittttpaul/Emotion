import { ReactElement } from 'react';
import { WishlistUI } from '../../components/ui/WishlistUI';
import { getServerSideProps } from '../../functions/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';

/**
 * @Wishlist_Page
 **/
function Wishlist() {
  return <WishlistUI />;
}

Wishlist.getLayout = function GetLayout(Wishlist: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Wishlist}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

export { getServerSideProps };

export default Wishlist;
