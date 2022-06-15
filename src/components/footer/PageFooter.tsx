import React, { FC } from 'react';
import {
  Cancel_Order_Link,
  Cart_Link,
  Facebook_Link,
  Instagram_Link,
  Manage_Your_Account_Link,
  Privacy_Policy_Link,
  Redeem_Gift_Codes_Link,
  Refund_Policy_Link,
  Return_Order_Link,
  Return_Order_Policy_Link,
  Track_Order_Link,
  Twitter_Link,
  Youtube_Link,
} from '../../routerLinks/RouterLinks';
import { FooterLogo } from '../logo/CompanyLogo';
import { PageFooterLinks } from './assets/PageFooterLinks';
import { PageFooterSocials } from './assets/PageFooterSocials';
import { PageFooterSubscribe } from './assets/PageFooterSubscribe';

interface IProps {}

/**
 * @author
 * @function @PageFooter
 **/

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
    icon: '/images/social/facebook_square.png',
    to: Facebook_Link,
  },
  {
    label: 'Instagram',
    icon: '/images/social/instagram_square.png',
    to: Instagram_Link,
  },
  {
    label: 'Twitter',
    icon: '/images/social/twitter_square.png',
    to: Twitter_Link,
  },
  {
    label: 'Youtube',
    icon: '/images/social/youtube_square.png',
    to: Youtube_Link,
  },
];

export const PageFooter: FC<IProps> = (props) => {
  return (
    <footer className="w-full relative box-border bg-[#202020]">
      <div className="w-full relative p-8 box-border max-w-[1570px] mx-auto">
        <FooterLogo />
        <div className="flex relative w-full justify-between">
          <PageFooterLinks heading="Services" Content={Services} />
          <PageFooterLinks heading="Company" Content={Company} />
          <PageFooterLinks heading="Account" Content={Account} />
          <PageFooterSocials heading="Socials" Content={Socials} />
          <PageFooterSubscribe/>
        </div>
        <div className="h-[1px] w-full my-6 bg-[rgba(255,255,255,0.1)]" />
      </div>
    </footer>
  );
};
