import { ReactElement, useState } from 'react';
import { ChildLayout } from '../../../components/layout/ChildLayout';
import { ParentLayout } from '../../../components/layout/ParentLayout';
import { ProductDetailUI } from '../../../components/ui/ProductDetailUI';
import { getServerSideProps } from '../../../algorithms/DeviceDetectSSR';

/**
 * @Product_Detail_Page
 **/
function ProductDetail() {
  return <ProductDetailUI />;
}

ProductDetail.getLayout = function GetLayout(ProductDetail: ReactElement) {
  const [ChildPage, setChildPage] = useState('ProductDetail');
  return (
    <ParentLayout setChildPage={(value) => setChildPage(value)}>
      <ChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {ProductDetail}
      </ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default ProductDetail;
