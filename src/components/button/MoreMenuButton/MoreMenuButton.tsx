import { DotsHorizontalIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import React, { FC, useState, MouseEvent, Fragment } from 'react';
import { IconButton } from '@mui/material';
import { MoreMenuButtonMenuProps } from './MoreMenuButton.Menu';
import dynamic from 'next/dynamic';

const MoreMenuButtonMenu = dynamic<MoreMenuButtonMenuProps>(() =>
  import('./MoreMenuButton.Menu').then((x) => x.MoreMenuButtonMenu)
);

interface IProps {
  ClassName?: string;
  Orientation: string;
  MenuContent: { label: string; icon: string; onClick: () => void }[];
}

/**
 * @author
 * @function @MoreMenuButton
 **/

export const MoreMenuButton: FC<IProps> = (props) => {
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
      <IconButton
        disableFocusRipple
        onClick={handleClick}
        className={`${props.ClassName} p-1 cursor-default block text-white items-center justify-center rounded-md opacity-75 hover:opacity-100 bg-transparent hover:bg-[#ffffff15]`}
        sx={{
          '.MuiTouchRipple-child': {
            borderRadius: '2px',
            backgroundColor: '#ffffff40 !important',
          },
        }}
      >
        {props.Orientation === 'horizontal' ? (
          <DotsHorizontalIcon className="h-5" />
        ) : (
          <DotsVerticalIcon className="h-5" />
        )}
      </IconButton>
      <MoreMenuButtonMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        MenuContent={props.MenuContent}
      />
    </Fragment>
  );
};
