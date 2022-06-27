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
    label: 'Manage your Account',
    to: Manage_Your_Account_Link,
  },
  {
    label: 'Redeem Gift Codes',
    to: Redeem_Gift_Codes_Link,
  },
  {
    label: 'View all Orders',
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
    <div className="grid sm-750:flex grid-cols-1 grid-rows-2 sm-750:grid-rows-1 relative w-full justify-between">
      <div className="grid col-span-1 row-span-1 order-2 sm-750:order-1 w-full sm-750:grid-cols-2 sm-750:grid-rows-2 lg-1100:grid-cols-3 lg-1100:grid-rows-1 xl-1300:grid-cols-4 xl-1300:grid-rows-1">
        <PageFooterLinks heading="Services" Content={Services} />
        <PageFooterLinks heading="Company" Content={Company} />
        <PageFooterLinks heading="Account" Content={Account} />
        <PageFooterSocials heading="Socials" Content={Socials} />
      </div>
      <div className="w-full col-span-1 row-span-2 sm-750:rows-span-1 order-1 sm-750:order-2 sm-750:max-w-[50%] flex justify-center">
        <PageFooterSubscribe />
      </div>
    </div>
  );
};
