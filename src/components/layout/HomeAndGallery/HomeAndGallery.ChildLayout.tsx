import { DeviceHook } from 'hooks/Hooks.Device';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import HeaderMobile from 'components/header/Header.Mobile';

function HomeAndGalleryChildLayout({ children }: ChildrenType) {
  const { isMobile } = DeviceHook();

  function Children() {
    return <div className="w-full z-auto">{children}</div>;
  }

  if (isMobile)
    return (
      <main className="w-full z-auto mx-auto">
        <HeaderMobile />
        <Children />
        {/* <FooterMobile /> */}
      </main>
    );

  return (
    <main className="pl-[268px] w-full h-screen z-auto">
      <div className="w-full h-full">
        <Header />
        <div className="pt-[70px] pr-[278px] pb-3 fixed w-full h-full overflow-hidden">
          <div className=" flex flex-col w-full h-full mx-auto max-w-[2000px] bg-[#181818] rounded-xl overflow-hidden">
            <div className="flex flex-col w-full overflow-auto">
              <Children />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeAndGalleryChildLayout;
