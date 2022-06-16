import React, { FC } from 'react';
import {
  Track_Order_Link,
  Return_Order_Link,
  Cancel_Order_Link,
  Privacy_Policy_Link,
  Return_Order_Policy_Link,
  Refund_Policy_Link,
  Manage_Your_Account_Link,
  Redeem_Gift_Codes_Link,
  Cart_Link,
  Facebook_Link,
  Instagram_Link,
  Twitter_Link,
  Youtube_Link,
} from '../../../../routerLinks/RouterLinks';
import { PageFooterLinks } from './PageFooterLinks';
import { PageFooterSocials } from './PageFooterSocials';
import { PageFooterSubscribe } from './PageFooterSubscribe';
import Facebook_Logo from '../../../../../public/images/social/facebook_square.png';
import Instagram_Logo from '../../../../../public/images/social/instagram_square.png';
import Twitter_Logo from '../../../../../public/images/social/twitter_square.png';
import Youtube_Logo from '../../../../../public/images/social/youtube_square.png';
import { PageFooterLinksFlex } from './PageFooterLinksFlex';

interface IProps {}

const Services = [
  {
    label: 'Track Order',
    to: Track_Order_Link,
  },
  {
    label: 'Return Order',
    to: Return_Order_Link,
  },
  {
    label: 'Cancel Order',
    to: Cancel_Order_Link,
  },
];

const Company = [
  {
    label: 'Privacy Policy',
    to: Privacy_Policy_Link,
  },
  {
    label: 'Return Order Policy',
    to: Return_Order_Policy_Link,
  },
  {
    label: 'Refund Policy',
    to: Refund_Policy_Link,
  },
];

const Account = [
  {
    label: 'Manage your account',
    to: Manage_Your_Account_Link,
  },
  {
    label: 'Redeem Gift Codes',
    to: Redeem_Gift_Codes_Link,
  },
  {
    label: 'View all orders',
    to: Cart_Link,
  },
];

const Socials = [
  {
    label: 'Facebook',
    icon: Facebook_Logo,
    to: Facebook_Link,
  },
  {
    label: 'Instagram',
    icon: Instagram_Logo,
    to: Instagram_Link,
  },
  {
    label: 'Twitter',
    icon: Twitter_Logo,
    to: Twitter_Link,
  },
  {
    label: 'Youtube',
    icon: Youtube_Logo,
    to: Youtube_Link,
  },
];

/**
 * @author
 * @function @FooterTop
 **/

export const FooterTop: FC<IProps> = (props) => {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden xl-1300:flex relative w-full justify-between">
        <PageFooterLinks heading="Services" Content={Services} />
        <PageFooterLinks heading="Company" Content={Company} />
        <PageFooterLinks heading="Account" Content={Account} />
        <PageFooterSocials heading="Socials" Content={Socials} />
        <div className="w-full max-w-[50%] flex justify-center">
          <PageFooterSubscribe />
        </div>
      </div>

      {/* Large Medium Screen */}
      <div className="hidden lg-1100:flex xl-1300:hidden flex-col  relative w-full">
        <div className="flex justify-between w-full">
          <div className="flex justify-between w-full max-w-[40%]">
            <PageFooterLinks heading="Services" Content={Services} />
            <PageFooterLinks heading="Company" Content={Company} />
            <PageFooterLinks heading="Account" Content={Account} />
          </div>
          <div className="w-full max-w-[50%] flex justify-center">
            <PageFooterSubscribe />
          </div>
        </div>
        <PageFooterSocials heading="Socials" Content={Socials} />
      </div>

      {/* Small Medium Screen */}
      <div className="hidden sm-750:flex lg-1100:hidden flex-col  relative w-full">
        <div className="flex justify-between w-full">
          <div className="flex justify-between w-full max-w-[40%]">
            <PageFooterLinks heading="Services" Content={Services} />
            <PageFooterLinks heading="Company" Content={Company} />
          </div>
          <div className="w-full max-w-[50%] flex justify-center">
            <PageFooterSubscribe />
          </div>
        </div>
        <div className="w-full flex max-w-[40%] justify-between">
          <PageFooterLinks heading="Account" Content={Account} />
          <PageFooterSocials heading="Socials" Content={Socials} />
        </div>
      </div>

      {/* Small Screen */}
      <div className="flex sm-750:hidden flex-col  relative w-full">
        <div className="w-full justify-center flex">
          <PageFooterSubscribe />
        </div>
        <PageFooterLinksFlex heading="Services" Content={Services} />
        <PageFooterLinksFlex heading="Company" Content={Company} />
        <PageFooterLinksFlex heading="Account" Content={Account} />
        <PageFooterSocials heading="Socials" Content={Socials} />
      </div>
    </>
  );
};
