import { NextPage } from 'next';
import { useState } from 'react';
import { MainSidePanel } from '../components/sidepanel/MainSidePanel';

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
 * @SidePanel
 **/
const SidePanel: NextPage = () => {
  const [Active, setActive] = useState('Home');
  return (
    <MainSidePanel
      TopPanelData={TopSidePanelItems}
      BottomPanelData={BottomSidePanelItems}
      Active={Active}
      setActive={(value) => setActive(value)}
    />
  );
};

export default SidePanel;
