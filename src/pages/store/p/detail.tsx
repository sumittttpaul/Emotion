import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../../components/layout/PageParentLayout';
import { ProductDetailUI } from '../../../components/ui/ProductDetailUI';

/**
 * @Product_Detail_Page
 **/
function ProductDetail() {
  return <ProductDetailUI />;
}

ProductDetail.getLayout = function GetLayout(ProductDetail: ReactElement) {
  const [ChildPage, setChildPage] = useState('ProductDetail');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {ProductDetail}
      </PageChildLayout>
    </PageParentLayout>
  );
};

export default ProductDetail;
