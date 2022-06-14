import { useCycle } from 'framer-motion';
import React, { FC, useState } from 'react';
import { CartButtonDark } from '../../button/CartButtonDark';
import { SearchButton } from '../../button/SearchButton';
import { WishlistButtonDark } from '../../button/WishlistButtonDark';
import { BottomHeaderNav } from './assets/BottomHeaderNav';
import { BottomHeaderSlider } from './assets/BottomHeaderSlider';

interface IProps {}

/**
 * @author
 * @function @HeaderBottom
 **/

export const HeaderBottom: FC<IProps> = (props) => {
  const [open, setOpen] = useCycle(false, true);
  const [Content, setContent] = useState('Discover');
  return (
    <div className="flex flex-col sticky-top items-start box-border w-full py-3 sm:py-4 backdrop-blur-sm bg-[rgba(18,18,18,0.85)]">
      <div className="flex relative box-border w-full max-w-[1440px] mx-auto justify-between items-center sm:px-5 px-3">
        <div className="flex relative md-900:space-x-6 items-center">
          <SearchButton />
          <BottomHeaderNav
            open={open}
            onOpen={() => setOpen()}
            Value={Content}
            onValueChange={(value) => setContent(value)}
          />
        </div>
        <div className="flex relative space-x-2.5 sm:space-x-4 items-center">
          <WishlistButtonDark />
          <CartButtonDark />
        </div>
      </div>
      <BottomHeaderSlider
        open={open}
        onClose={() => setOpen()}
        Value={Content}
        onValueChange={(value) => setContent(value)}
      />
    </div>
  );
};
