import React, { FC } from 'react';
import {
  Cancel_Order_Link,
  Contact_Us_Link,
  Return_Order_Link,
  Track_Order_Link,
} from '../../routerLinks/RouterLinks';
import { FooterLogo } from '../logo/CompanyLogo';
import { PageFooterLinks } from './assets/PageFooterLinks';

interface IProps {}

/**
 * @author
 * @function @PageFooter
 **/

const CustomerService = [
  {
    label: 'Contact Us',
    to: Contact_Us_Link,
  },
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

export const PageFooter: FC<IProps> = (props) => {
  return (
    <footer className="w-full relative box-border bg-[#202020]">
      <div className="w-full relative p-8 box-border max-w-[1570px] mx-auto">
        <FooterLogo />
        <div className="flex relative w-[50%] justify-between">
          <PageFooterLinks
            heading="Customer service"
            Content={CustomerService}
          />
        </div>
      </div>
    </footer>
  );
};
