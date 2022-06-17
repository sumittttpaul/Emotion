import { ReactElement } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { CollectionsUI } from '../../components/ui/StoreComponentUI/CollectionsUI';

/**
 * @Collections_Page
 **/
export default function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function getLayout(Collections: ReactElement) {
  return <PageLayout>{Collections}</PageLayout>;
};
