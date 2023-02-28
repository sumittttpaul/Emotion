import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { CartUI } from '../../components/ui/CartUI';

/**
 * @Cart_Page
 **/
function Cart() {
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

export default Cart;
