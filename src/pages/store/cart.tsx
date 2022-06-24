import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import dynamic from 'next/dynamic';
import { CartUIProps } from '../../components/ui/StoreComponentUI/CartUI';

const CartUI = dynamic<CartUIProps>(
  () =>
    import('../../components/ui/StoreComponentUI/CartUI').then((x) => x.CartUI),
  {
    loading: () => (
      <h6 className="text-white p-5 w-full text-center">Loading . . . </h6>
    ),
    ssr: false,
  }
);

/**
 * @Cart_Page
 **/
export default function Cart() {
  return <CartUI />;
}

Cart.getLayout = function GetLayout(Cart: ReactElement) {
  const [ChildPage, setChildPage] = useState('Cart');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Cart}
      </PageChildLayout>
    </PageParentLayout>
  );
};
