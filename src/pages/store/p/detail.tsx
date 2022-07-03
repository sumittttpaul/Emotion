import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../../components/layout/PageParentLayout';
import dynamic from 'next/dynamic';
import { ProductDetailProps } from '../../../components/ui/ProductDetailUI';

const ProductDetailUI = dynamic<ProductDetailProps>(
  () =>
    import('../../../components/ui/ProductDetailUI').then(
      (x) => x.ProductDetailUI
    ),
  {
    ssr: true,
  }
);

/**
 * @Product_Detail_Page
 **/
export default function ProductDetail() {
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
