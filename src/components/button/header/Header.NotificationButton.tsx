import { IconButton } from '@mui/material';
import React, { FC, Fragment, useState, MouseEvent } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';
import Image from 'next/image';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { HeaderNotificationButtonMenuProps } from './Header.NotificationButton.Menu';
import { StoreNotificationContent } from '../../../contents/store/Store.Notification';
import dynamic from 'next/dynamic';

const HeaderNotificationButtonMenu = dynamic<HeaderNotificationButtonMenuProps>(
  () =>
    import('./Header.NotificationButton.Menu').then(
      (x) => x.HeaderNotificationButtonMenu
    ),
  { ssr: false }
);

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">What&apos;s New</h6>}
      >
        <IconButton
          disableFocusRipple
          onClick={handleClick}
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
              src={
                open
                  ? '/icons/notification-thin-fill-white.svg'
                  : '/icons/notification-thin-white.svg'
              }
              alt=""
            />
          </StyledBadge>
        </IconButton>
      </TooltipDark>
      <HeaderNotificationButtonMenu
        ContentArray={StoreNotificationContent}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </Fragment>
  );
};
