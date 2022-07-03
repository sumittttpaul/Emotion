import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import dynamic from 'next/dynamic';
import { CollectionsUIProps } from '../../components/ui/CollectionsUI';

const CollectionsUI = dynamic<CollectionsUIProps>(
  () =>
    import('../../components/ui/CollectionsUI').then((x) => x.CollectionsUI),
  {
    ssr: true,
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
