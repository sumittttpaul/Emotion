import Image from 'next/legacy/image';
import { Button } from '@mui/material';
import React, { FC, useState } from 'react';
import { SearchContentProps } from '../../../../contents/store/search/Store.Search';

export interface HeaderMobileSearchButtonMenuProps {
  ContentArray: SearchContentProps[];
  openSearch: string | undefined;
}

/**
 * @author
 * @function @HeaderMobileSearchButtonMenu
 **/

export const HeaderMobileSearchButtonMenu: FC<
  HeaderMobileSearchButtonMenuProps
> = (props) => {
  const [Data, setData] = useState(props.ContentArray);

  const removeItem = (index: number) => {
    if (index !== -1) setData(Data.filter((o, i) => index !== i));
  };

  return (
    <div
      className={`${
        props.openSearch === 'open' ? 'block' : 'hidden'
      } absolute top-[65px] p-3 z-[999] w-full bg-primary-theme overflow-scroll`}
    >
      {Data.map((value, idx) => (
        <Button
          key={value.id}
          className="
          rounded-xl px-2 py-7 h-[35px] w-full flex cursor-default items-center text-white bg-transparent button-text-lower"
        >
          <div className="block h-5 ml-1 pr-3.5 opacity-70">
            <Image
              layout="fixed"
              height={18}
              width={18}
              src={value.Icon}
              alt=""
            />
          </div>
          <div className="items-center pr-1 w-full overflow-hidden">
            <p className="block text-[13px] truncate font-normal text-left opacity-75">
              {value.Name}
            </p>
          </div>
          {value.type == 'previous-search' ? (
            <div
              onPointerDown={() => removeItem(idx)}
              className="
                rounded-[50%] flex opacity-70 items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer hover:bg-transparent"
            >
              <Image
                layout="fixed"
                height={17}
                width={17}
                src={value.DeleteIcon}
                alt=""
              />
            </div>
          ) : (
            <div
              className="
                rounded-[50%] flex opacity-70 items-center justify-center w-[30px] h-[30px] p-0 m-0 cursor-pointer hover:bg-transparent"
            >
              <Image
                layout="fixed"
                height={22}
                width={22}
                src={value.DeleteIcon}
                alt=""
              />
            </div>
          )}
        </Button>
      ))}
    </div>
  );
};
