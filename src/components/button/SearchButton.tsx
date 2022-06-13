import React, { FC } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';

interface IProps {}

/**
 * @author
 * @function @SearchButton
 **/

export const SearchButton: FC<IProps> = (props) => {
  return (
    <>
      <Button
        aria-label="desktop-search-button"
        disableRipple
        disableFocusRipple
        disableTouchRipple
        className="hidden md:block text-white w-[180px] cursor-text justify-start button-text-lower p-[10px] rounded-full bg-[rgba(255,255,255,0.075)] hover:bg-[rgba(255,255,255,0.075)]"
      >
        <div className="space-x-3 flex items-center opacity-60 ml-1">
          <SearchIcon className="h-[14px] w-[14px]" />
          <h6 className="text-[11px] font-normal">Search</h6>
        </div>
      </Button>
      <IconButton
      aria-label="mobile-search-button"
        className="block md:hidden opacity-80 button-text-lower h-full p-2.5 border border-solid border-[rgba(255,255,255,0.23)]"
        sx={{
          borderRadius: '6px !important',
          '.MuiTouchRipple-child': {
            borderRadius: '0 !important',
            backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
          },
        }}
      >
        <SearchIcon className="h-4 w-4 opacity-80 text-white" />
      </IconButton>
    </>
  );
};
