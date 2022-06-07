import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @HeaderHome
 **/
export const HeaderHome: FC<IProps> = (props) => {
  return (
    <>
      <div className="w-full bg-[#202020]">
        <nav className="HomeBarNav">
          <ul className="flex flex-row">
            <li>
              <Link
                underline="none"
                className="text-[#CCC] text-[12px] tracking-[0.075em] block p-3"
                href=""
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                underline="none"
                className="text-[#CCC] text-[12px] tracking-[0.075em] block p-3"
                href=""
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                underline="none"
                className="text-[#CCC] text-[12px] tracking-[0.075em] block p-3"
                href=""
              >
                Track Order
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
