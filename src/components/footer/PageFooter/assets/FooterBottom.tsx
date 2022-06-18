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
      {/* Large Screen */}
      <div className="hidden lg-1100:flex w-full mt-2 justify-between items-center">
        <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
          Copyright © 2022 Agewear-lifestyle. All rights reserved.
        </h6>
        <div className="flex space-x-4 items-center lg-1100:-ml-[17.5%]">
          <FooterBottomLinks to={Privacy_Policy_Link} label="Privacy Policy" />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Return_Order_Link}
            label="Return order Policy"
          />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks to={Refund_Policy_Link} label="Refund Policy" />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Terms_Conditions_Link}
            label="Terms and Conditions"
          />
        </div>
        <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
          India
        </h6>
      </div>

      {/* Large Medium Screen */}
      <div className="hidden md-900:flex lg-1100:hidden w-full flex-col space-y-4 mt-2 justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
            Copyright © 2022 Agewear-lifestyle. All rights reserved.
          </h6>
          <div className="flex space-x-4 items-center lg-1100:-ml-[17.5%]">
            <FooterBottomLinks
              to={Privacy_Policy_Link}
              label="Privacy Policy"
            />
            <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
            <FooterBottomLinks
              to={Return_Order_Link}
              label="Return order Policy"
            />
            <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
            <FooterBottomLinks to={Refund_Policy_Link} label="Refund Policy" />
            <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
            <FooterBottomLinks
              to={Terms_Conditions_Link}
              label="Terms and Conditions"
            />
          </div>
        </div>
        <h6 className="text-[11.5px] font-[300] whitespace-normal w-full justify-start flex text-white opacity-80">
          India
        </h6>
      </div>

      {/* Small Medium Screen */}
      <div className="hidden sm:flex md-900:hidden flex-col mt-2 w-full space-y-4 justify-between items-center">
        <div className="flex space-x-4 items-center">
          <FooterBottomLinks to={Privacy_Policy_Link} label="Privacy Policy" />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Return_Order_Link}
            label="Return order Policy"
          />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks to={Refund_Policy_Link} label="Refund Policy" />
          <div className="h-5 w-[1px] bg-[rgba(255,255,255,0.23)]" />
          <FooterBottomLinks
            to={Terms_Conditions_Link}
            label="Terms and Conditions"
          />
        </div>
        <div className="w-full flex justify-between">
          <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
            Copyright © 2022 Agewear-lifestyle. All rights reserved.
          </h6>
          <h6 className="text-[11.5px] font-[300] whitespace-normal flex text-white opacity-80">
            India
          </h6>
        </div>
      </div>

      {/* Small Screen */}
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
