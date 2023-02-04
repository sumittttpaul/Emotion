import { BellIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {}

/**
 * @author
 * @function @MainHeaderNotificationButton
 **/
export const MainHeaderNotificationButton: FC<IProps> = (props) => {
  return (
    <TooltipDark
      arrow
      placement="bottom"
      title={<h6 className="font-[400]">Notification</h6>}
    >
      <IconButton
        disableFocusRipple
        aria-label="desktop-wishlist-button"
        className="flex group opacity-80 hover:opacity-100 transition-all duration-300 text-white h-[47px] w-[47px] items-center justify-center rounded-lg button-text-lower bg-[#202020] hover:bg-[#202020]"
        sx={{
          '.MuiTouchRipple-child': {
            borderRadius: '8px',
            backgroundColor: '#ffffff50 !important',
          },
        }}
      >
        {/* <div className="flex h-full w-full items-center"> */}
        <BellIcon className="h-5 w-5 opacity-80 group-hover:opacity-100" />
        {/* <h6 className="text-xs font-normal">Wishlist</h6> */}
        {/* </div> */}
      </IconButton>
    </TooltipDark>
  );
};
