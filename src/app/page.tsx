import HomeAndGalleryChildLayout from 'components/layout/HomeAndGallery/HomeAndGallery.ChildLayout';
import HomeAndGalleryParentLayout from 'components/layout/HomeAndGallery/HomeAndGallery.ParentLayout';
import DiscoverInterface from 'interfaces/Discover.Interface';

function Page() {
  return (
    <HomeAndGalleryParentLayout>
      <HomeAndGalleryChildLayout>
        <DiscoverInterface />
      </HomeAndGalleryChildLayout>
    </HomeAndGalleryParentLayout>
  );
}

export default Page;
