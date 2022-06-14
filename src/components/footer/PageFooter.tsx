import { Button } from '@mui/material';
import React, { FC } from 'react';
import { FooterLogo } from '../logo/CompanyLogo';

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
          <div className="flex flex-col py-2">
            <h6 className="text-white text-[13px] opacity-50 py-1">
              Customer service
            </h6>
            <div className="relative flex">
              <ul className="flex flex-col relative space-y-[2px]">
                {CustomerService.map((value) => (
                  <li key={value.label} className="relative flex">
                    <Button
                      key={value.label}
                      component="a"
                      href={value.to}
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      className="text-white flex justify-start items-center p-0 w-28 whitespace-nowrap font-[300] text-[12px] button-text-lower"
                    >
                      {value.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <h6 className="text-white text-[13px] opacity-50 py-1">
              Customer service
            </h6>
            <div className="relative flex">
              <ul className="flex flex-col relative space-y-[2px]">
                {CustomerService.map((value) => (
                  <li key={value.label} className="relative flex">
                    <Button
                      key={value.label}
                      component="a"
                      href={value.to}
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      className="text-white flex justify-start items-center p-0 w-28 whitespace-nowrap font-[300] text-[12px] button-text-lower"
                    >
                      {value.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <h6 className="text-white text-[13px] opacity-50 py-1">
              Customer service
            </h6>
            <div className="relative flex">
              <ul className="flex flex-col relative space-y-[2px]">
                {CustomerService.map((value) => (
                  <li key={value.label} className="relative flex">
                    <Button
                      key={value.label}
                      component="a"
                      href={value.to}
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      className="text-white flex justify-start items-center p-0 w-28 whitespace-nowrap font-[300] text-[12px] button-text-lower"
                    >
                      {value.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
