import { ReactElement } from 'react';
import { HomeAndGalleryChildLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import { HomeAndGalleryParentLayout } from '../../components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import { ProductDetailUI } from '../../components/ui/ProductDetailUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Product_Detail_Page
 **/
function ProductDetail() {
  return <ProductDetailUI />;
}

ProductDetail.getLayout = function GetLayout(ProductDetail: ReactElement) {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>{ProductDetail}</HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
};

export { getServerSideProps };

export default ProductDetail;
