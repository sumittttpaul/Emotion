import { SearchIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @HeaderHome
 **/

export const HeaderHome: FC<IProps> = (props) => {
  return (
    <div className="flex relative box-border w-full max-w-[1340px] mx-auto justify-between items-center my-2.5 px-5">
      <div className="flex relative space-x-3">
        <Button
          disableRipple
          className="text-white w-[200px] cursor-text justify-start button-text-lower p-[11px] rounded-full bg-[rgba(255,255,255,0.075)] hover:bg-[rgba(255,255,255,0.075)]"
        >
          <div className="space-x-3 flex items-center opacity-60 ml-1">
            <SearchIcon className="h-[14px] w-[14px]" />
            <h6 className="text-[11px] font-normal">Search</h6>
          </div>
        </Button>
      </div>
    </div>
  );
};
