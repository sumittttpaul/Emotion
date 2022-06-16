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
} from '../../../routerLinks/RouterLinks';
import { FooterLogo } from '../../logo/CompanyLogo';
import { PageFooterLinks } from './assets/PageFooterLinks';
import { PageFooterSocials } from './assets/PageFooterSocials';
import { PageFooterSubscribe } from './assets/PageFooterSubscribe';
import Facebook_Logo from '../../../../public/images/social/facebook_square.png';
import Instagram_Logo from '../../../../public/images/social/instagram_square.png';
import Twitter_Logo from '../../../../public/images/social/twitter_square.png';
import Youtube_Logo from '../../../../public/images/social/youtube_square.png';
import { FooterBottom } from './assets/FooterBottom';

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

export const PageFooter: FC<IProps> = (props) => {
  return (
    <div className="w-full self-end overflow-hidden bg-[#202020]">
      <div className="w-full relative p-8 box-border max-w-[1570px] mx-auto">
        <FooterLogo />
        <div className="flex relative w-full justify-between">
          <PageFooterLinks heading="Services" Content={Services} />
          <PageFooterLinks heading="Company" Content={Company} />
          <PageFooterLinks heading="Account" Content={Account} />
          <PageFooterSocials heading="Socials" Content={Socials} />
          <div className="w-full max-w-[50%] flex justify-center">
            <PageFooterSubscribe />
          </div>
        </div>
        <div className="h-[1px] w-full my-5 bg-[rgba(255,255,255,0.1)]" />
        <h6 className="text-[11.5px] py-2 font-[300] leading-[22px] whitespace-normal lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%] flex text-white opacity-80">
          Founded in 2022, Agewear is a lifestyle fashion brand that makes
          creative, distinctive fashion for the trendy, contemporary Indian.
          Agewear-lifestyle was created on the principle of creating impact
          through innovation, honesty and thoughtfulness. We like to experiment
          freely, which allows us to balance creativity and relatability, and
          our innovative designs. Our range of products is always fresh and
          up-to-date. Discover the new you with Agewear-lifestyle.
        </h6>
        <h6 className="text-[11.5px] py-2 font-[300] whitespace-normal flex text-white">
          Discover the new you with Agewear-lifestyle.
        </h6>
        <FooterBottom/>
      </div>
    </div>
  );
};
