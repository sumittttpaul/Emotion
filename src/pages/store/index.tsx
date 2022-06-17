import { ReactElement } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { DiscoverUI } from '../../components/ui/StoreComponentUI/DiscoverUI';

/**
 * @Store_Page
 **/
export default function Store() {
  return <DiscoverUI />;
}

Store.getLayout = function getLayout(Store: ReactElement) {
  return <PageLayout>{Store}</PageLayout>;
};
