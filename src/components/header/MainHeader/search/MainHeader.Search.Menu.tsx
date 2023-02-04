import React, { FC, useEffect, useState } from 'react';

export interface MainHeaderSearchMenuProps {
  SearchMenu: boolean;
  setSearchMenu: (value: boolean) => void;
}

/**
 * @author
 * @function @MainHeaderSearchMenu
 **/
export const MainHeaderSearchMenu: FC<MainHeaderSearchMenuProps> = (props) => {
  const [MenuWidth, setMenuWidth] = useState(0);

  const GetWidth = (value: number) => {
    return 'w-[' + value + 'px]';
  };

  useEffect(() => {
    if (typeof window === 'object') {
      let SearchButton = document.querySelector('main-header-search-button');
      if (SearchButton) {
        let SearchButtonStyle = getComputedStyle(SearchButton);
        setMenuWidth(parseInt(SearchButtonStyle.width));
      }
    }
  });

  return (
    <div
      className={`${props.SearchMenu ? 'block' : 'hidden'} ${GetWidth(
        MenuWidth
      )} fixed min-w-[300px] left-[195px] top-[70px] bg-white p-10 rounded-2xl`}
    >
      Sumit Paul
    </div>
  );
};
