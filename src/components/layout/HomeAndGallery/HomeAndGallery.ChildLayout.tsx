import React, { FC, ReactNode } from 'react';
import { useReduxSelector } from '../../../redux/ReduxHooks';
import { Footer } from '../../footer/Footer';
import { Header } from '../../header/Header';
import { HeaderMobile } from '../../header/Header.Mobile';
import { SelectDevice } from '../../../redux/reducers/DeviceReducer';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @HomeAndGalleryChildLayout
 **/

export const HomeAndGalleryChildLayout: FC<IProps> = (props) => {
  const { isMobile } = useReduxSelector(SelectDevice);

  const Children = () => {
    return <div className="w-full z-auto">{props.children}</div>;
  };

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
};
