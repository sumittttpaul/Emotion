import React, { FC } from 'react';
import { HeaderBottom } from './BottomHeader/HeaderBottom';
import { HeaderTop } from './TopHeader/HeaderTop';

interface IProps {}

/**
 * @author
 * @function @PageHeader
 **/

export const PageHeader: FC<IProps> = (props) => {
  return (
    <header className="w-full h-full box-border relative flex flex-col overflow-clip sm:overflow-auto scroll-smooth">
      <HeaderTop />
      <div className="w-full h-[15px] min-h-[15px] block bg-transparent" />
      <HeaderBottom />
      <div className="w-full h-[15px] min-h-[15px] block bg-transparent" />
    </header>
  );
};
