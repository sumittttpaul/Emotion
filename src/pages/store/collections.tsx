import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import dynamic from 'next/dynamic';

const CollectionsUI = dynamic(
  // @ts-ignore: Unreachable code error
  () =>
    import('../../components/ui/StoreComponentUI/CollectionsUI').then(
      (x) => x.CollectionsUI
    ),
  {
    loading: () => (
      <h6 className="text-white p-5 w-full text-center">Loading . . . </h6>
    ),
    ssr: false,
  }
);

/**
 * @Collections_Page
 **/
export default function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function GetLayout(Collections: ReactElement) {
  const [ChildPage, setChildPage] = useState('Collections');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Collections}
      </PageChildLayout>
    </PageParentLayout>
  );
};
