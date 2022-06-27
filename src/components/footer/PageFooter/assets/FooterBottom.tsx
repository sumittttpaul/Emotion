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
    <>
      {/* Desktop Screen */}
      <div className="grid sm:gap-y-2 w-full mt-2 items-center sm:grid-cols-2 sm:grid-rows-2 md-900:grid-cols-2 md-900:grid-rows-2 lg-1140:grid-cols-3 lg-1140:grid-rows-1">
        <h6 className="text-[11.5px] sm:row-span-2 md-900:row-span-1 order-1 md-900:order-1 w-full justify-start font-[300] whitespace-normal flex text-white opacity-80">
          Copyright © 2022 Agewear-lifestyle. All rights reserved.
        </h6>
        <div className="flex w-full col-span-2 row-span-1 md-900:col-span-1 justify-center md-900:justify-end md-900:order-2 lg-1140:justify-center space-x-4 items-center">
          <FooterBottomLinks to={Privacy_Policy_Link} label="Privacy Policy" />
          <div className="h-5 px-[0.5px] box-border block bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Return_Order_Link}
            label="Return order Policy"
          />
          <div className="h-5 px-[0.5px] box-border block bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks to={Refund_Policy_Link} label="Refund Policy" />
          <div className="h-5 px-[0.5px] box-border block bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Terms_Conditions_Link}
            label="Terms and Conditions"
          />
        </div>
        <h6 className="text-[11.5px] row-span-2 lg-1140:row-span-1 w-full order-1 md-900:order-3 justify-end md-900:justify-start lg-1140:justify-end font-[300] whitespace-normal flex text-white opacity-80">
          India
        </h6>
      </div>

      {/* Mobile Screen */}
      <div className="flex flex-col sm:hidden mt-2 w-full space-y-4 justify-between items-center">
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.1)]" />
        <div className="w-full justify-start flex flex-col items-center">
          <FooterBottomLinks
            className="w-full"
            to={Privacy_Policy_Link}
            label="Privacy Policy"
          />
          <FooterBottomLinks
            className="w-full"
            to={Return_Order_Link}
            label="Return order Policy"
          />
          <FooterBottomLinks
            className="w-full"
            to={Refund_Policy_Link}
            label="Refund Policy"
          />
          <FooterBottomLinks
            className="w-full"
            to={Terms_Conditions_Link}
            label="Terms and Conditions"
          />
        </div>
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.1)]" />
        <div className="w-full flex justify-between">
          <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
            Copyright © 2022 Agewear-lifestyle. All rights reserved.
          </h6>
          <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
            India
          </h6>
        </div>
      </div>
    </>
  );
};
