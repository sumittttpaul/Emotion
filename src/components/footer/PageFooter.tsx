import React, { FC } from 'react';
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
    to: '#',
  },
  {
    label: 'Track Order',
    to: '#',
  },
  {
    label: 'Return Order',
    to: '#',
  },
  {
    label: 'Cancel Order',
    to: '#',
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
