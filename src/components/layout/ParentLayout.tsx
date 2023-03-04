import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { ContainerDark } from '../container/ContainerDark';
import { SidePanel } from '../sidepanel/SidePanel';

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
 * @function @ParentLayout
 **/
export const ParentLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  const { isMobile } = useReduxSelector((state) => state.Device);

  if (isMobile) return <ContainerDark>{props.children}</ContainerDark>;

  return (
    <ContainerDark>
      <SidePanel
        TopPanelData={TopSidePanelItems}
        BottomPanelData={BottomSidePanelItems}
        Active={Active}
        setActive={(value) => setActive(value)}
        setChildPage={props.setChildPage}
      />
      {props.children}
    </ContainerDark>
  );
};
