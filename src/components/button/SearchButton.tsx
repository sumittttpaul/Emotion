import React, { FC } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';

interface IProps {}

/**
 * @author
 * @function @SearchButton
 **/

export const SearchButton: FC<IProps> = (props) => {
  return (
    <Button
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className="text-white w-[200px] cursor-text justify-start button-text-lower p-[11px] rounded-full bg-[rgba(255,255,255,0.075)] hover:bg-[rgba(255,255,255,0.075)]"
    >
      <div className="space-x-3 flex items-center opacity-60 ml-1">
        <SearchIcon className="h-[14px] w-[14px]" />
        <h6 className="text-[11px] font-normal">Search</h6>
      </div>
    </Button>
  );
};
