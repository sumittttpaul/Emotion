import React, { FC } from 'react';
import {
  Privacy_Policy_Link,
  Return_Order_Link,
  Refund_Policy_Link,
  Terms_Conditions_Link,
} from '../../../../routerLinks/RouterLinks';
import { FooterBottomLinks } from './FooterBottomLinks';

interface IProps {}

/**
 * @author
 * @function @FooterBottom
 **/

export const FooterBottom: FC<IProps> = (props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-3 sm:gap-y-2 w-full mt-2 items-center sm:grid-cols-2 sm:grid-rows-2 md-900:grid-cols-2 md-900:grid-rows-2 lg-1140:grid-cols-3 lg-1140:grid-rows-1">
      <div className="block sm:hidden col-span-2 row-span-2 h-[1px] w-full bg-[#ffffff1a]" />
      <h6 className="text-[11.5px] whitespace-normal xs-400:whitespace-nowrap col-span-1 row-span-2 sm:row-span-2 md-900:row-span-1 order-1 md-900:order-1 w-full justify-start font-[300] flex text-white opacity-80">
        Copyright © 2022 Agewear-lifestyle. All rights reserved.
      </h6>
      <div className="flex flex-col col-span-2 row-span-1 sm:flex-row w-full justify-start sm:col-span-2 sm:row-span-1 md-900:col-span-1 sm:justify-center md-900:justify-end md-900:order-2 lg-1140:justify-center sm:space-x-4 sm:items-center">
        <FooterBottomLinks to={Privacy_Policy_Link} label="Privacy Policy" />
        <div className="h-5 px-[0.5px] box-border hidden sm:block bg-[#ffffff3b]" />
        <FooterBottomLinks to={Return_Order_Link} label="Return order Policy" />
        <div className="h-5 px-[0.5px] box-border hidden sm:block bg-[#ffffff3b]" />
        <FooterBottomLinks to={Refund_Policy_Link} label="Refund Policy" />
        <div className="h-5 px-[0.5px] box-border hidden sm:block bg-[#ffffff3b]" />
        <FooterBottomLinks
          to={Terms_Conditions_Link}
          label="Terms and Conditions"
        />
      </div>
      <h6 className="text-[11.5px] items-start h-full sm:h-auto sm:items-center col-span-1 row-span-2 sm:row-span-2 lg-1140:row-span-1 sm:w-full order-1 md-900:order-3 justify-end md-900:justify-start lg-1140:justify-end font-[300] whitespace-normal flex text-white opacity-80">
        India
      </h6>
      <div className="block col-span-2 row-span-2 sm:hidden h-[1px] w-full bg-[#ffffff1a]" />
    </div>
  );
};
