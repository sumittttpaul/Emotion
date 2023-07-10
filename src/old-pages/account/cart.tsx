import { ReactElement } from 'react';
import { CartUI } from '../../components/ui/CartUI';
import { getServerSideProps } from '../../functions/DeviceDetectSSR';
import { HomeAndGalleryChildLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';

/**
 * @Cart_Page
 **/
function Cart() {
  return <CartUI />;
}

Cart.getLayout = function GetLayout(Cart: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{Cart}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

export { getServerSideProps };

export default Cart;
