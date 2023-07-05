import { Tab } from '@headlessui/react';
import { useTheme } from '@mui/material';
import { LayoutGroup, motion } from 'framer-motion';
import TabPanel from '../../tab/SelectAvatar/SelectAvatarTabPanel';
import React, { FC, useState } from 'react';
import { SidePanelShoppingListTabWishlist } from './SidePanel.ShoppingList.Tab.Wishlist';
import { SidePanelShoppingListTabCartProps } from './SidePanel.ShoppingList.Tab.Cart';
import {
  HomeCartContent,
  HomeWishlistContent,
} from '../../../contents/home/Home.ShoppingList';
import dynamic from 'next/dynamic';
import { SidePanelShoppingListTabHeader } from './SidePanel.ShoppingList.Tab.Header';
import SwipeableViews from '../../../../packages/react-swipeable-views/src/index';

const SidePanelShoppingListTabCart = dynamic<SidePanelShoppingListTabCartProps>(
  () =>
    import('./SidePanel.ShoppingList.Tab.Cart').then(
      (x) => x.SidePanelShoppingListTabCart
    ),
  { ssr: false }
);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * @author
 * @function @SidePanelShoppingListTab
 **/

export const SidePanelShoppingListTab: FC = () => {
  const [Tabvalue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleWishlistClick = () => {
    setTabValue(0);
  };

  const handleCartClick = () => {
    setTabValue(1);
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="w-full px-3 pb-3">
        <LayoutGroup>
          <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-md bg-[#0f0f0f] p-[5px]">
              <Tab
                onClick={handleWishlistClick}
                className={({ selected }) =>
                  classNames(
                    'w-full relative rounded-md text-[13px] outline-none custom-tab-transition-color cursor-default',
                    selected ? 'text-white' : 'text-white/[0.50]'
                  )
                }
              >
                {Tabvalue ? (
                  ''
                ) : (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="w-full h-full absolute rounded-md outline-none z-[1] bg-[#202020]"
                  />
                )}
                <div className="flex w-full py-2 relative justify-center space-x-1 z-[2]">
                  <h6>Wishlist</h6>
                </div>
              </Tab>
              <Tab
                onClick={handleCartClick}
                className={({ selected }) =>
                  classNames(
                    'w-full relative rounded-md text-[13px] outline-none custom-tab-transition-color cursor-default',
                    selected ? 'text-white' : 'text-white/[0.50]'
                  )
                }
              >
                {Tabvalue ? (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="w-full h-full absolute rounded-md outline-none z-[1] bg-[#202020]"
                  />
                ) : (
                  ''
                )}
                <div className="flex w-full py-2 relative justify-center space-x-2 z-[2]">
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
        className="w-full h-full flex flex-col relative"
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
};
