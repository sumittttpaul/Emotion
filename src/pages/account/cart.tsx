import { ReactElement } from 'react';
import { ParentLayout } from '../../components/layout/ParentLayout';
import { ChildLayout } from '../../components/layout/ChildLayout';
import { CartUI } from '../../components/ui/CartUI';
import { getServerSideProps } from '../../algorithms/DeviceDetectSSR';

/**
 * @Cart_Page
 **/
function Cart() {
  return <CartUI />;
}

Cart.getLayout = function GetLayout(Cart: ReactElement) {
  return (
    <ParentLayout>
      <ChildLayout>{Cart}</ChildLayout>
    </ParentLayout>
  );
};

export { getServerSideProps };

export default Cart;
