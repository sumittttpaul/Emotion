import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { SearchContentProps } from '../../../../contents/store/search/Store.Search';

export interface MainHeaderSearchMenuProps {
  SearchMenu: boolean;
  setSearchMenu: (value: boolean) => void;
  ContentArray: SearchContentProps[];
}

/**
 * @author
 * @function @MainHeaderSearchMenu
 **/
export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (props) => {
  return (
    <div
      className={`${
        props.SearchMenu ? 'block' : 'hidden'
      } z-10 absolute w-full top-14 px-1 py-2 bg-white rounded-2xl`}
    >
      {props.ContentArray.map((value, idx) => (
        <div
          key={idx}
          className="rounded-lg p-1 h-[35px] w-full group flex cursor-default items-center hover:bg-[#00000015]"
        >
          <div className="block h-5 w-5 ml-2 opacity-70">
            <Image layout="fixed" height={18} width={18} src={value.Icon} />
          </div>
          <p className="block text-[14px] font-medium truncate w-full text-left ml-4 mr-1">
            {value.Name}
          </p>
          <IconButton
            className="hidden group-hover:flex items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-default hover:bg-transparent"
            style={{
              borderRadius: 0,
            }}
            sx={{
              '.MuiTouchRipple-child': {
                borderRadius: 0,
              },
            }}
          >
            <Image
              layout="fixed"
              height={17}
              width={17}
              src="/icons/search-delete.svg"
            />
          </IconButton>
        </div>
      ))}
    </div>
  );
};
