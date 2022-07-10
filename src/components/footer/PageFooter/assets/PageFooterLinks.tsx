import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  Content: { label: string; to: string }[];
  heading: string;
}

/**
 * @author
 * @function @PageFooterLinks
 **/

export const PageFooterLinks: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col py-2">
      <h6 className="text-white text-[13px] opacity-50 py-1">
        {props.heading}
      </h6>
      <div className="relative flex">
        <ul className="flex flex-row sm-750:flex-col relative space-y-[2px]">
          {props.Content.map((value, idx) => (
            <li key={value.label} className="relative flex">
              <Link
                key={value.label}
                href={value.to}
                underline="hover"
                className="text-white underline-offset-2 flex justify-start items-center p-0 whitespace-nowrap font-[300] text-[12px] button-text-lower"
              >
                {value.label}
              </Link>
              {idx === 2 ? (
                <></>
              ) : (
                <div className="block sm-750:hidden h-5 w-[1px] mx-2 bg-[#ffffff3b]" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
