import React, { FC } from 'react';
import {
  About_Us_Link,
  Cancel_Order_Link,
  Cart_Link,
  Collections_Link,
  Contact_Us_Link,
  Discover_Link,
  Manage_Your_Account_Link,
  Offers_Link,
  Privacy_Policy_Link,
  Redeem_Gift_Codes_Link,
  Refund_Policy_Link,
  Return_Order_Link,
  Return_Order_Policy_Link,
  Track_Order_Link,
} from '../../routerLinks/RouterLinks';
import { FooterLogo } from '../logo/CompanyLogo';
import { PageFooterLinks } from './assets/PageFooterLinks';

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

const Account =[
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
]

const OurSocials = [
  {
    label: 'Facebook',
    icon: '',
    to: '',
  },
  {
    label: 'Instagram',
    icon: '',
    to: '',
  },
  {
    label: 'Twitter',
    icon: '',
    to: '',
  },
];

export const PageFooter: FC<IProps> = (props) => {
  return (
    <footer className="w-full relative box-border bg-[#202020]">
      <div className="w-full relative p-8 box-border max-w-[1570px] mx-auto">
        <FooterLogo />
        <div className="flex relative w-[50%] justify-between">
          <PageFooterLinks
            heading="Services"
            Content={Services}
          />
          <PageFooterLinks heading="Company" Content={Company} />
          <PageFooterLinks heading='Account' Content={Account}/>
        </div>
      </div>
    </footer>
  );
};
