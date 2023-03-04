import { Button } from '@mui/material';
import React, { FC } from 'react';
import { StoreDiscoverPopularSearchIProps } from '../../../contents/store/discover/Store.Discover.Search';

export interface HeaderSearchPopularProps {
  ContentArray: StoreDiscoverPopularSearchIProps[];
  onClick: () => void;
}

export const HeaderSearchPopular: FC<HeaderSearchPopularProps> = (props) => {
  return (
    <div className="flex flex-col w-full px-3 sm:px-3 space-y-3.5">
      <h6 className="font-[400] text-sm text-white w-full text-left">
        Popular Searches
      </h6>
      <ul className="flex flex-wrap relative w-full h-auto justify-start">
        {props.ContentArray.map((value, index) => (
          <li key={index}>
            <Button
              onClick={props.onClick}
              disableFocusRipple
              disableTouchRipple
              disableRipple
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff80 !important',
                },
              }}
              className="text-xs font-[300] tracking-[0.7px] border m-1 py-2 px-3.5 border-solid border-[#ffffff26] hover:border-[#ffffff80] transition-all duration-300 ease-linear rounded-full button-text-lower text-[#ffffffb3] hover:text-white bg-transparent hover:bg-transparent"
            >
              {value.Label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
