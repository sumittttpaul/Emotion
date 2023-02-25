import React, { FC, ReactNode, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { PageContainerDark } from '../container/PageContainerDark';
import { MainSidePanel } from '../sidepanel/MainSidePanel';

interface IProps {
  children: ReactNode;
  setChildPage: (value: string) => void;
}

const TopSidePanelItems = [
  {
    Name: 'Home',
    Icon: '/icons/home.svg',
    IconActive: '/icons/home-fill.svg',
  },
  {
    Name: 'Fanbook',
    Icon: '/icons/blog.svg',
    IconActive: '/icons/blog-fill.svg',
  },
  {
    Name: 'Basket',
    Icon: '/icons/basket.svg',
    IconActive: '/icons/basket-fill.svg',
  },
];

const BottomSidePanelItems = [
  {
    Name: 'FAQ',
    Icon: '/icons/faq.svg',
    IconActive: '/icons/faq-fill.svg',
  },
  {
    Name: 'Help',
    Icon: '/icons/help.svg',
    IconActive: '/icons/help-fill.svg',
  },
];

/**
 * @author
 * @function @PageParentLayout
 **/
export const PageParentLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  return (
    <PageContainerDark>
      <BrowserView>
        <MainSidePanel
          TopPanelData={TopSidePanelItems}
          BottomPanelData={BottomSidePanelItems}
          Active={Active}
          setActive={(value) => setActive(value)}
          setChildPage={props.setChildPage}
        />
      </BrowserView>
      {/* <PageHeader setPage={props.setChildPage} /> */}
      {props.children}
      {/* <PageFooter setPage={props.setChildPage} /> */}
    </PageContainerDark>
  );
};
