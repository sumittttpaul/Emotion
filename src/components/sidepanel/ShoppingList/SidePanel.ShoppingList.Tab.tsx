import { Tab } from '@headlessui/react';
import { useTheme } from '@mui/material';
import { LayoutGroup, motion } from 'framer-motion';
import TabPanel from '../../tab/SelectAvatar/SelectAvatarTabPanel';
import { useState } from 'react';
import { SidePanelShoppingListTabCartProps } from './SidePanel.ShoppingList.Tab.Cart';
import {
  HomeCartContent,
  HomeWishlistContent,
} from 'contents/home/Home.ShoppingList';
import dynamic from 'next/dynamic';
import SidePanelShoppingListTabWishlist from './SidePanel.ShoppingList.Tab.Wishlist';
import SidePanelShoppingListTabHeader from './SidePanel.ShoppingList.Tab.Header';
import SwipeableViews from '../../../../packages/react-swipeable-views/src/index';

const SidePanelShoppingListTabCart = dynamic<SidePanelShoppingListTabCartProps>(
  () => import('./SidePanel.ShoppingList.Tab.Cart'),
  { ssr: false },
);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function SidePanelShoppingListTab() {
  const [Tabvalue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleWishlistClick = () => {
    setTabValue(0);
  };

  const handleCartClick = () => {
    setTabValue(1);
  };

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="w-full px-3 pb-3">
        <LayoutGroup>
          <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-md bg-[#0f0f0f] p-[5px]">
              <Tab
                onClick={handleWishlistClick}
                className={({ selected }) =>
                  classNames(
                    'custom-tab-transition-color relative w-full cursor-default rounded-md text-[13px] outline-none',
                    selected ? 'text-white' : 'text-white/[0.50]',
                  )
                }
              >
                {Tabvalue ? (
                  ''
                ) : (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="absolute z-[1] h-full w-full rounded-md bg-[#202020] outline-none"
                  />
                )}
                <div className="relative z-[2] flex w-full justify-center space-x-1 py-2">
                  <h6>Wishlist</h6>
                </div>
              </Tab>
              <Tab
                onClick={handleCartClick}
                className={({ selected }) =>
                  classNames(
                    'custom-tab-transition-color relative w-full cursor-default rounded-md text-[13px] outline-none',
                    selected ? 'text-white' : 'text-white/[0.50]',
                  )
                }
              >
                {Tabvalue ? (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="absolute z-[1] h-full w-full rounded-md bg-[#202020] outline-none"
                  />
                ) : (
                  ''
                )}
                <div className="relative z-[2] flex w-full justify-center space-x-2 py-2">
                  <h6>Cart</h6>
                </div>
              </Tab>
            </Tab.List>
          </Tab.Group>
        </LayoutGroup>
      </div>
      <SidePanelShoppingListTabHeader
        ContentArray={Tabvalue === 0 ? HomeWishlistContent : HomeCartContent}
        MoreMenuValue={Tabvalue === 0 ? 'wishlist' : 'cart'}
      />
      <SwipeableViews
        disabled={true}
        index={Tabvalue}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        className="relative flex h-full w-full flex-col"
        id="SidepanelSwipeableViews"
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
      >
        <TabPanel value={Tabvalue} index={0} dir={theme.direction}>
          <SidePanelShoppingListTabWishlist
            ContentArray={HomeWishlistContent}
          />
        </TabPanel>
        <TabPanel value={Tabvalue} index={1} dir={theme.direction}>
          <SidePanelShoppingListTabCart ContentArray={HomeCartContent} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default SidePanelShoppingListTab;
