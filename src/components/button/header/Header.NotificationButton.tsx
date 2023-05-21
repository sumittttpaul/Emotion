import { BellIcon } from '@heroicons/react/outline';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';
import Image from 'next/image';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

interface IProps {}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#0084FF',
    top: 3,
    height: 22,
    width: 22,
    border: '2px solid #181818',
    padding: '0 4px',
    borderRadius: 11,
  },
}));

/**
 * @author
 * @function @HeaderNotificationButton
 **/

export const HeaderNotificationButton: FC<IProps> = (props) => {
  return (
    <TooltipDark
      arrow
      placement="bottom"
      title={<h6 className="font-[400]">What's new</h6>}
    >
      <IconButton
        disableFocusRipple
        aria-label="desktop-wishlist-button"
        className="flex transition-all duration-300 text-white h-[47px] w-[47px] items-center justify-center rounded-lg button-text-lower bg-transparent hover:bg-[#202020]"
        sx={{
          '.MuiTouchRipple-child': {
            borderRadius: '4px',
            backgroundColor: '#ffffff50 !important',
          },
        }}
      >
        <StyledBadge badgeContent={5}>
          <Image
            width={22}
            height={22}
            src={'/icons/notification-thin-white.svg'}
            alt=""
          />
        </StyledBadge>
      </IconButton>
    </TooltipDark>
  );
};
