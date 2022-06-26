import { ReactElement, useState } from 'react';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import dynamic from 'next/dynamic';
import { DiscoverUIProps } from '../../components/ui/StoreComponentUI/DiscoverUI';

const DiscoverUI = dynamic<DiscoverUIProps>(
  () =>
    import('../../components/ui/StoreComponentUI/DiscoverUI').then(
      (x) => x.DiscoverUI
    ),
  {
    ssr: false,
  }
);

/**
 * @Store_Page
 **/
export default function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function GetLayout(Store: ReactElement) {
  const [ChildPage, setChildPage] = useState('Discover');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Store}
      </PageChildLayout>
    </PageParentLayout>
  );
};
